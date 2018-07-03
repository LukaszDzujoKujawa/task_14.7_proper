var contacts = [

{
	id: 1,
	firstName: 'Jan',
	lastName: 'Nowak',
	email: 'jan.nowak@example.com',
},
{
	id: 2,
	firstName: 'Jon',
	lastName: 'Steward',
	email: 'jon.sterwad@example.com',
},
{
	id: 3,
	firstName: 'Zbigniew',
	lastName: 'Kozioł',
	email: 'zbigniew.koziol@example.com',
}
];

var contactForm = {
	firstName: "",
	lastName: "",
	email: ""
};

var App = React.createClass({
	render: function() {
		return (
          	<div className={'app'}>
            	<ContactForm contact={contactForm}></ContactForm>
            	<Contacts items = {contacts}></Contacts>
            </div>
		);
	}
});