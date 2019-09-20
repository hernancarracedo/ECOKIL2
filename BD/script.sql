CREATE TABLE issue (
    id INT NOT NULL auto_increment,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(500),
    personal_id INT(5),
    relevancia_issue_id INT(2),
    vencimiento DATE,
    estado_issue_id INT(2),
    PRIMARY KEY (id)
);

CREATE TABLE personal (
    id INT NOT NULL auto_increment,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    url_img_perfil VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE issue_relevancia (
    id INT NOT NULL auto_increment,
    tx_issue_relevancia VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE issue_estado (
    id INT NOT NULL auto_increment,
    tx_issue_estado VARCHAR(50) NOT NULL,
    css VARCHAR(50),
    PRIMARY KEY (id)
);


INSERT INTO `personal` (`id`, `nombre`, `apellido`, `url_img_perfil`)
VALUES
    (1,'Adrian', 'Cano', 'img/perfil/adrian.jpg'),
    (2,'Eduardo', 'Sanchez', 'img/perfil/eduardo.jpg'),
    (3,'Rocio', 'Torelli', 'img/perfil/rocio.jpg'),
    (4,'Mel', 'Denis', 'img/perfil/mel.jpg'),
    (5,'Emanuel', 'Mendez', 'img/perfil/emanuel.jpg'),
    (6,'Sergio', 'Ruggiero', 'img/perfil/sergio.jpg'),
    (7,'Emilio', 'Differding', 'img/perfil/emilio.jpg'),
    (8,'Gonzalo', 'Iriart', 'img/perfil/gonzalo.jpg'),
    (9,'Juan', 'Davila', 'img/perfil/juan.jpg'),
    (10,'Enzo', 'Barrera', 'img/perfil/enzo.jpg'),
    (11,'Nazareno', 'Morillo', 'img/perfil/nazareno.jpg'),
    (12,'Hernan', 'Carracedo', 'img/perfil/hernan.jpg');


INSERT INTO `issue_relevancia` (`id`, `tx_issue_relevancia`)
VALUES
    (1,'ALTA'),
    (2,'MEDIA'),
    (3,'BAJA');


INSERT INTO `issue_estado` (`id`, `tx_issue_estado`, `css`)
VALUES
    (1,'PENDIENTE', 'bg-success'),
    (2,'DEMORADO', 'bg-danger'),
    (4,'CUMPLIDO', 'bg-primary'),
    (3,'CANCELADO', 'bg-warning');   
