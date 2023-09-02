<?php
    $data = file_get_contents('pizza.json');
    $menu = json_decode($data, true);

    $menu = $menu["menu"];
?>
<html>
<head>
    <title>Latihan 1</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

</head>
<body>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="img/logo.png" width="120" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <h1>All Menu</h1>
            </div>
        </div>
        <div class="row">
            <?php foreach($menu as $row): ?>
            <div class="col-md-4 mb-3">
            <div class="card" style="width: 18rem;">
            <img src="img/pizza/<?= $row["gambar"]?>" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title"><?= $row["nama"]?></h5>
                <p class="card-text"><?= $row["deskripsi"]?></p>
                <h5 class="card-title">Rp. <?= $row["harga"]?>,-</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</body>
</html>