import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const app = express();
const port = 3000;

// Cấu hình CORS cho phép frontend của bạn (Cập nhật URL frontend của bạn khi deploy)
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';  // Cấu hình URL frontend
app.use(cors({
  origin: frontendUrl, // Cho phép từ URL của frontend
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// API Puppeteer Login
app.post('/api/puppeteer-login', async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });

    const page = await browser.newPage();
    await page.goto('https://app.golike.net/login', { timeout: 0 });

    await page.waitForSelector('input[type="text"]');
    console.log("⏳ Đang chờ người dùng nhập thông tin và nhấn đăng nhập...");

    // Chờ người dùng nhấn đăng nhập và điều hướng hoàn tất
    await page.waitForNavigation({ timeout: 0 });

    const currentUrl = page.url();
    console.log('🌐 Current URL:', currentUrl);

    await browser.close();

    if (currentUrl.includes('home')) {
      console.log('✅ Đăng nhập thành công!');
      await execAsync(`start http://localhost:5173/home`); // Mở frontend
      return res.json({ success: true });
    } else {
      console.log('❌ Đăng nhập thất bại!');
      return res.status(401).json({ success: false, message: 'Đăng nhập thất bại!' });
    }
  } catch (error) {
    console.error('❌ Lỗi khi login:', error.message);
    return res.status(500).json({ success: false, message: 'Lỗi server!' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
});
