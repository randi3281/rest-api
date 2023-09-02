<?php
    $data = file_get_contents('pizza.json');
    $menu = json_decode($data, true);

    $menu = $menu["menu"];
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Piz-Hut</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
  </head>
  <body>
    
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="img/logo.png" width="100px" alt="">
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
    <!-- end navbar -->

    
    <!-- isi -->
    <div class="container">
        <div class="row mt-3 mb-3">
            <div class="col">
                <h1>Semua Menu</h1>
            </div>
        </div>
        <div class="row">
            <?php foreach($menu as $row){?>
                <div class="col-md-4">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="img/pizza/<?= $row["gambar"]?>" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"><?= $row["nama"]?></h5>
                            <p class="card-text"><?= $row["deskripsi"]?></p>
                            <p class="card-text">Rp. <?= $row["harga"]?>,-</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>   
                </div>
            <?php }?>
        </div>
    </div>
    <!-- end isi -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
  </body>
</html>