import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const app = express();
const port = 3000;

app.use(cors());

app.post('/api/puppeteer-login', async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://app.golike.net/login', { timeout: 0 });

    await page.waitForSelector('input[type="text"]');
    await page

    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ timeout: 0 }),
    ]);

    const currentUrl = page.url();
    console.log('Current URL:', currentUrl);

    if (currentUrl.includes('home')) {
      console.log('✅ Đăng nhập thành công!');
      await browser.close();

      // Mở trình duyệt mặc định đến frontend
      await execAsync('start http://localhost:5173/home');

      return res.json({ success: true });
    } else {
      console.log('❌ Đăng nhập thất bại!');
      await browser.close();
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
