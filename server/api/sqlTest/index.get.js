import mysql from "mysql2/promise";

export default defineEventHandler(async (event) => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'mJ@jaya48ad1',
            database: 'wcp_mja'
        });

        const [rows] = await connection.execute(`SELECT * FROM user`);
        await connection.end();
        return rows;
    } catch (error) {
        console.error("Database error:", error);
        return { error: "Database query failed" };
    }
});
