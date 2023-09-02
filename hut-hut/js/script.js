tampilkansemua();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    $('#judul').html(kategori);
    $.getJSON('pizza.json', function(variabel){
        let data = variabel.menu;
        let content = '';

        if(kategori == "All Menu"){
            $('#daftar-menu').html('');
            tampilkansemua();
            return;
        }
        
        $.each(data, function(i, isinya){
            if(isinya.kategori == kategori.toLowerCase()){
                content +=`
                <div class="col-md-4 ">
                <div class="card mb-3" style="width: 18rem;">
                    <img src="img/pizza/`+isinya.gambar+`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">`+isinya.nama+`</h5>
                        <p class="card-text">`+isinya.deskripsi+`</p>
                        <p class="card-text">`+isinya.harga+`</p>
                        <a href="#" class="btn btn-primary">Klik disini</a>
                    </div>
                    </div>
                </div>   
                `;
            }
            $(`#daftar-menu`).html(content);
        })
    });
});

function tampilkansemua(){
    $.getJSON('pizza.json', function(isi){
        let menu = isi.menu;
        $.each(menu, function(i, data){
            $('#daftar-menu').append(`
            <div class="col-md-4 ">
            <div class="card mb-3" style="width: 18rem;">
                <img src="img/pizza/`+data.gambar+`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+data.nama+`</h5>
                    <p class="card-text">`+data.deskripsi+`</p>
                    <p class="card-text">`+data.harga+`</p>
                    <a href="#" class="btn btn-primary">Klik disini</a>
                </div>
                </div>
            </div>   
            `)
        });
    });    
};