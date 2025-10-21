-- Script SQL para inicializar la base de datos MySQL para el proyecto Botica

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS botica_db;
USE botica_db;

-- Crear tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'USER') NOT NULL
);

-- Crear tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(8,2) NOT NULL,
    stock SMALLINT NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

-- Insertar datos de prueba para usuarios (contraseñas hasheadas con BCrypt)
INSERT INTO usuarios (username, password, role) VALUES
('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ADMIN'),
('user', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'USER');

-- Insertar datos de prueba para productos
INSERT INTO productos (nombre, descripcion, precio, stock, categoria) VALUES
('Paracetamol 500mg', 'Analgésico y antipirético', 5.50, 100, 'Analgésicos'),
('Ibuprofeno 400mg', 'Antiinflamatorio no esteroideo', 8.75, 80, 'Antiinflamatorios'),
('Amoxicilina 500mg', 'Antibiótico de amplio espectro', 12.00, 50, 'Antibióticos'),
('Vitamina C 1000mg', 'Suplemento vitamínico', 15.25, 120, 'Vitaminas'),
('Jarabe para la tos', 'Expectorante y antitusivo', 9.90, 60, 'Respiratorios');
