const Database = require('./config')

const initDB = {

    async init() {
        const db = await Database()

        await db.exec(`
            CREATE TABLE profile (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                avatar TEXT,
                monthly_budget INTEGER,
                days_per_week INTEGER,
                hours_per_day INTEGER,
                vacation_per_year INTEGER,
                value_hour INTEGER
            );
        `)

        await db.exec(`
            CREATE TABLE jobs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                daily_hours INTEGER,
                total_hours INTEGER,
                created_at DATETIME
            );
        `)

        await db.run(`
            INSERT INTO profile (
                name,
                avatar,
                monthly_budget,
                days_per_week,
                hours_per_day,
                vacation_per_year,
                value_hour
            ) VALUES (
                'Salomao Souza',
                'https://github.com/xSallus.png',
                3500,
                5,
                6,
                12,
                75
            );
        `)

        await db.run(`
            INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                created_at
            ) VALUES (
                'Gula-Guloso',
                2,
                2,
                5434212511526
            );
        `)

        await db.run(`
            INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                created_at
            ) VALUES (
                'Freedelicias',
                5,
                90,
                5555454125554
            );
        `)

        await db.run(`
            INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                created_at
            ) VALUES (
                'OneTwo Project',
                3,
                47,
                5455356528488
            );
        `)

        await db.close()
    }
}

initDB.init()
