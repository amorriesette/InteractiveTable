
var tableJson = angular.module('tableJson', []);
tableJson.controller('tableJsonCtrl', function($scope){
    $scope.contacts = [
        {
            "type": "Executive",
            "name": "Ann Brown",
            "title": "CEO",
            "phone": "(512)456-5555",
            "ext": "",
            "fax": "(512)456-5555",
            "email":"Executive"
        },
        {
            "type": "Inmar AR",
            "name": "Mary Smith",
            "title": "Lorem Ipsum",
            "phone": "(512)456-5555",
            "ext": "",
            "fax": "(512)456-5555",
            "email":"Inmar AR"
        },
        {
            "type": "Executive",
            "name": "John Doe",
            "title": "Dolor Sit",
            "phone": "(512)456-5555",
            "ext": "",
            "fax": "(512)456-5555",
            "email":"Executive"
        },
        {
            "type": "Daily",
            "name": "John Doe",
            "title": "Dolar sit amet",
            "phone": "(512)456-5555",
            "ext": "",
            "fax": "(512)456-5555",
            "email":"Daily"
        },
        {
            "type": "Other",
            "name": "John Doe",
            "title": "Lorem Ipsum",
            "phone": "(512)456-5555",
            "ext": "",
            "fax": "(512)456-5555",
            "email":"Other"
        }
    ];


/**
  * @desc Add new contacts to screen based on what was entered in popup. Validates if there is data and
        alerts the user if there was no data that was entered. The required data entries are Type, name and
        phone number. Once the users data is accepted it is added to the JSON data and the popup is cleared
        and hidden.
  * @param none
  * @return bool - success or failure
*/
    $scope.newContact = function(){
        var addContact = document.querySelector('.modal');
        if(!addContact.querySelector('.type').value || !addContact.querySelector('.name').value || !addContact.querySelector('.phone').value){
            if(!$scope.type){
                addContact.querySelector('.type').classList.add('bg-error');
            }
            if(!$scope.name){
                addContact.querySelector('.name').classList.add('bg-error');
            }
            if(!$scope.phone){
                addContact.querySelector('.phone').classList.add('bg-error');
            }
            return false;
        }

        $scope.contacts.push({
            type: addContact.querySelector('.type').value,
            name: addContact.querySelector('.name').value,
            phone: addContact.querySelector('.phone').value,
            title: addContact.querySelector('.title').value,
            ext: addContact.querySelector('.ext').value,
            fax: addContact.querySelector('.fax').value,
            email: addContact.querySelector('.email').value
        });

        addContact.querySelector('.type').value ='';
        addContact.querySelector('.name').value ='';
        addContact.querySelector('.phone').value ='';
        addContact.querySelector('.title').value ='';
        addContact.querySelector('.ext').value ='';
        addContact.querySelector('.fax').value ='';
        addContact.querySelector('.email').value ='';
        addContact.querySelector('.type').classList.remove('bg-error');
        addContact.querySelector('.name').classList.remove('bg-error');
        addContact.querySelector('.phone').classList.remove('bg-error');
        $('#newContactOverlay').modal('hide');
    };

/**
  * @desc After traversing through the list of contacts in the JSON the user selected item is deleted
        based on a comparison.
  * @param person: contact object that is being deleted
  * @return none
*/
    $scope.deleteContact = function(person){
        for(var i in $scope.contacts){
            if($scope.contacts[i] === person){
                $scope.contacts.splice(i, 1);
            }
        }
    };

/**
  * @desc Function to manage selecting and unselecting the delete icon
  * @param
  * @return none*/

    $scope.addToDelete = function(person){
        for(var i in $scope.contacts){
            if($scope.contacts[i] === person){
                $scope.contacts.splice(i, 1);

            }
        }
    };

/**
  * @desc The form is toggled based on its current state, block or none.
  * @param person: contact object that is being deleted
  * @return none
*/
     $scope.toggleAddForm = function(){
        var addContact = document.querySelector('.addItem');
        addContact.style.display = addContact.style.display =='block' ?'none':'block';
    };

});

