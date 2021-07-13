// 내 인증키 7D191AEC064EF2FA92B74A92EA6604BCEDF8074545D38BB043509C40428E4CDC

function Book() {
    this.url = "http://book.interpark.com/api/bestSeller.api";
    this.url += "?key=" + "7D191AEC064EF2FA92B74A92EA6604BCEDF8074545D38BB043509C40428E4CDC";
    this.url += "&categoryId=" + "100";
    // this.url += "&output=" + "json";
    // this.url += "&title";
}




$.ajax ({
    url: interparkAPI,
    type: "post",
    datatype: "xml",
    success: function(data) {
        var $data = $(data).find("title");
        if($data.length > 0) {
            $.each($data, function(i, o) {
                var $title = $(o).find("title").text();
            })
        }
    }
});   