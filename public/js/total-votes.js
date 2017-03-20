$('.totalVotesForBill').on('click', function(e){
  e.preventDefault();


var voterVotesBack = []; 
// var thisForm = $(this).parent();
var lawVotesYes = 0;
var lawVotesNo = 0;
var law_id = $(this).data("id");
var lawRefId = $(this).data("lawrefid");
// var quant = $(this).siblings().eq(0).val();
var queryURL = "/voter_votes/all";
// console.log(this)
console.log("id passed=  " + lawRefId);

  $.ajax({
      url: queryURL,
      method: 'GET',
      dataType: 'json',
    }).done(function(response) {

        console.log(response);    
        voterVotesBack = response;
        console.log(voterVotesBack[5].id)

        console.log("voter votes Length = " + voterVotesBack.length)
           for (i = 0; i < voterVotesBack.length; i++)
              { 
                if (voterVotesBack[i].voter_votes_law_ref_id == lawRefId)
                   {
                    if (voterVotesBack[i].voter_votes_vote == "yes")
                       {
                        lawVotesYes += 1
                       }
                    else
                       {
                        lawVotesNo += 1
                       }
                    }
                    
              }    
          console.log(lawVotesYes);
          console.log(lawVotesNo);
          $("#yes-results").html("Yes:" + lawVotesYes)
          $("#no-results").html("No:" + lawVotesNo)
    
                           
            // });


          var queryURL = "/laws/putlaw/" + law_id + "?";
          console.log(queryURL);
          var dataToUpdate  = { law_votes_yes: lawVotesYes,
                                  law_votes_no:  lawVotesNo
                                }
          console.log(dataToUpdate);

          console.log("start put one read")

          $.ajax({
            url: queryURL,
            headers: { "X-HTTP-Method-Override": "PUT" },
            method: 'POST',
            dataType: 'json',
            data: dataToUpdate,
          }).done(function(response) {
            console.log("finish one put") 

          });    




                

            

     });
});


