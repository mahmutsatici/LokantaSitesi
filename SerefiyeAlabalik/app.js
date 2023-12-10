
$(document).ready(function () {
    $("#btnSubmit").click(function (e) {
        var jsonData = {};

        var formData = $("#myform").serializeArray();

        $.each(formData, function () {
            if (jsonData[this.name]) {
                if (!jsonData[this.name].push) {
                    jsonData[this.name] = [jsonData[this.name]];
                }
                jsonData[this.name].push(this.value || '');
            } else {
                jsonData[this.name] = this.value || '';
            }


        });
        let obj = JSON.stringify(jsonData, null, 2);
        console.log(obj);
        e.preventDefault();
    });
    $(document).ready(function(){
        $('.gorsel-slider').slick({
            autoplay: true, // Otomatik oynatma
            autoplaySpeed: 1500, // Otomatik oynatma hızı (ms cinsinden)
            dots: true, // Navigasyon noktalarını göster
            infinite: true, // Sonsuz döngü
            speed: 500, // Geçiş hızı (ms cinsinden)
            slidesToShow: 1, // Görünen slayt sayısı
            slidesToScroll: 1 // Kaydırılan slayt sayısı
        });
    });
});
