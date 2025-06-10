const bcrypt = require('bcrypt');
async function generateHash() {
    const password = '26062006'; // Thay thế bằng mật khẩu admin của bạn
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    console.log(hash);
}
generateHash();
