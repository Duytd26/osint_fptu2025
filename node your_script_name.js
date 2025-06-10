const bcrypt = require('bcrypt');
async function generateHash() {
    const password = 'your_admin_password_here'; // Thay thế bằng mật khẩu admin của bạn
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    console.log(hash);
}
generateHash();