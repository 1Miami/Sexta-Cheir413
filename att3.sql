Create DATABASE oficina;
use oficina;

CREATE TABLE carros (
    id INT PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano VARCHAR(4) NOT NULL,
    cor VARCHAR(20) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

INSERT INTO carros (id, marca, modelo, ano, cor, preco) VALUES (1, 'Toyota', 'Corolla', '2020', 'Azul', 85000.50);
INSERT INTO carros (id, marca, modelo, ano, cor, preco) VALUES (2, 'Honda', 'Civic', '2019', 'Cinza', 95000.00);
INSERT INTO carros (id, marca, modelo, ano, cor, preco) VALUES (3, 'Ford', 'Focus', '2024', 'Vermelho', 70000.00);
INSERT INTO carros (id, marca, modelo, ano, cor, preco) VALUES (4, 'Chevrolet', 'Onix', '2018', 'Preto', 50000.00);

SELECT *
FROM carros;
