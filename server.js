import express from 'express';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import cors from 'cors';
import { join } from 'path';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Setup Lowdb
const file = join(process.cwd(), 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter, { posts: [], users: [] });

async function startServer() {
  await db.read(); // Đọc dữ liệu từ db.json

  app.use(cors({
    origin: '*',  // Hoặc thay * bằng địa chỉ frontend của bạn
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

  // Routes
  app.get('/api/posts', (req, res) => {
    res.json(db.data.posts);
  });

  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = db.data.users.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      res.json({
        success: true,
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
          balance: user.balance || 0, // ✅ Thêm balance vào đây
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  });  

  app.post('/api/register', async (req, res) => {
    const { username, password } = req.body
    const existingUser = db.data.users.find(u => u.username === username)
  
    if (existingUser) {
      return res.status(400).json({ message: 'Tên đăng nhập đã tồn tại' })
    }
  
    const newUser = {
      id: db.data.users.length ? db.data.users[db.data.users.length - 1].id + 1 : 1,
      username,
      password,
      role: 'user',
      balance: 0
    }
  
    db.data.users.push(newUser)
    await db.write()
  
    res.json({ success: true, message: 'Đăng ký thành công' })
  })

  app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
  });
}

startServer();
