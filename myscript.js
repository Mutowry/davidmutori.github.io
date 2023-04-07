var doc = new jsPDF();
        
        var specialElementHandlers = {
        
        "#editor": function (element, renderer) {
        
        return true;
        
        }
        
        };
        
        $("#generatePDF").click(function () {
        
        doc.fromHTML($("#htmlContent").html(), 15, 15, {
        
        "width": 700,
        
        "elementHandlers": specialElementHandlers
        
        });
        
        doc.save("DavidMutori_ISS1205_2023.pdf");
        
        });