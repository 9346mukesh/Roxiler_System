const pool = require("./db");

const initializeDatabase = async () => {
  let connection;

  try {
    connection = await pool.getConnection();

    console.log("MySQL database is connected");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS roles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        role_name VARCHAR(30) NOT NULL UNIQUE
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,

        name VARCHAR(60) NOT NULL,

        email VARCHAR(255) NOT NULL UNIQUE,

        password VARCHAR(255) NOT NULL,

        address VARCHAR(400),

        role_id INT NOT NULL,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

        FOREIGN KEY(role_id)
        REFERENCES roles(id)
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS stores (
        id INT AUTO_INCREMENT PRIMARY KEY,

        name VARCHAR(100) NOT NULL,

        email VARCHAR(255) NOT NULL UNIQUE,

        address VARCHAR(400) NOT NULL,

        owner_id INT NOT NULL,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

        FOREIGN KEY(owner_id)
        REFERENCES users(id)
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS ratings (
        id INT AUTO_INCREMENT PRIMARY KEY,

        user_id INT NOT NULL,

        store_id INT NOT NULL,

        rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

        FOREIGN KEY(user_id)
        REFERENCES users(id),

        FOREIGN KEY(store_id)
        REFERENCES stores(id),

        UNIQUE(user_id, store_id)
      )
    `);

    await connection.query(`
      INSERT IGNORE INTO roles(id, role_name)
      VALUES
      (1,'ADMIN'),
      (2,'USER'),
      (3,'STORE_OWNER')
    `);

    console.log("✅ Database schema initialized");
  } catch (error) {
    console.error("❌ Schema initialization failed");
    console.error(error.message);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

module.exports = initializeDatabase;