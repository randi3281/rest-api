tampilkansemuamenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    let kategori = $(this).html();
    console.log(kategori);  
    $('h1').html(kategori);

    $.getJSON('pizza.json', function(data){
        let menu = data.menu;
        let content = '';

        if(kategori == 'All Menu'){
            $('#daftar-menu').html('');
            tampilkansemuamenu();
            return;
        }

        $.each(menu, function(i, data){
            if(data.kategori == kategori.toLowerCase()){
               content += `
               <div class="col-md-4 mb-3"> 
               <div class="card" style="width: 18rem;"> <img src="img/pizza/`+data.gambar+`" class="card-img-top"> 
               <div class="card-body"> 
               <h5 class="card-title">`+data.nama+`</h5> 
               <p class="card-text">`+data.deskripsi+`</p> 
               <h5 class="card-title">Rp. `+data.harga+`,-</h5> 
               <a href="#" class="btn btn-primary">Go somewhere</a> 
               </div> 
               </div> 
               </div>`;
            }
        $('#daftar-menu').html(content);
    });
});
});

function tampilkansemuamenu(){
    $.getJSON('pizza.json', function(data){
        let menu = data.menu;
        $.each(menu, function(i, data){
            $('#daftar-menu').append(`
            <div class="col-md-4 mb-3"> 
            <div class="card" style="width: 18rem;"> <img src="img/pizza/`+data.gambar+`" class="card-img-top"> 
            <div class="card-body"> 
            <h5 class="card-title">`+data.nama+`</h5> 
            <p class="card-text">`+data.deskripsi+`</p> 
            <h5 class="card-title">Rp. `+data.harga+`,-</h5> 
            <a href="#" class="btn btn-primary">Go somewhere</a> 
            </div> 
            </div> 
            </div>`
        )});
    });
}