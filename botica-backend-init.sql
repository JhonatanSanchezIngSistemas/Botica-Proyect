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
