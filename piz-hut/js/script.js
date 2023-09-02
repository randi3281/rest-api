tampilkansemua();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    $('#judul').html(kategori);

    $.getJSON('pizza.json', function(variabel){
        let variabeltersederhanakan = variabel.menu;
        let content = '';

        if(kategori == "All Menu"){
            $('#daftar-menu').html('');
            tampilkansemua();
            return;
        }
        
        $.each(variabeltersederhanakan, function(i, data){
            if(data.kategori == kategori.toLowerCase()){
                content += `
                <div class="col-md-4">
            <div class="card mb-3" style="width: 18rem;">
                <img src="img/pizza/`+ data.gambar +`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+data.nama +`</h5>
                    <p class="card-text">`+data.deskripsi+`</p>
                    <p class="card-text">`+data.harga+`,-</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>   
        </div>
                `;
            }
        $('#daftar-menu').html(content);
        })
    });
});

function tampilkansemua(){
    $.getJSON('pizza.json', function(isian){
        let menu = isian.menu;
        $.each(menu, function(i, data){
            $('#daftar-menu').append(`
            <div class="col-md-4">
            <div class="card mb-3" style="width: 18rem;">
                <img src="img/pizza/`+ data.gambar +`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+data.nama +`</h5>
                    <p class="card-text">`+data.deskripsi+`</p>
                    <p class="card-text">`+data.harga+`,-</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>   
        </div>
            `)
        });
    });
}