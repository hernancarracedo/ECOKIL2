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
    PRIMARY KEY (id)
);





