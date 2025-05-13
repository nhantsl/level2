import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Đặt URL frontend tùy theo môi trường
const frontendUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://nhantsl.github.io/level2/home'  // ✅ URL GitHub Pages
    : 'http://localhost:5173/home';             // ✅ URL local

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
      await execAsync(`start ${frontendUrl}`); // Mở frontend
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
