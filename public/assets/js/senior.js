// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $("create-form").on("submit", function(event) {
        //preventDefault on a submit event.
        event.preventDefault();

        var newRequest = {
            name: $("#name").val().trim(),
            serv: $("#serv").val().trim(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            zip: $("#zip").val().trim()
        };
        //send the POST request.
        $.ajax("/api/request", {
            type: "POST",
            data: newRequest
        }).then( function() {
            console.log("created new request");
            location.reload();
        });
    });
    //update!
    /* $(".update-form").on("submit", function(event) {
        event.preventDefault();

        var updateRequest = {
            name: $("#name").val().trim(),
            serv: $("#serv").val().trim(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            zip: $("#zip").val().trim()
        };
        var id = $(this).data("id");
        $.ajax("/api/request/" + id, {
            type:"PUT",
            data: updateRequest
        }).then(
            function() {
                console.log("update request");
                location.assign("/");
            }
        );
    }); */
    // jQuery event handlers should go here.

});
