var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
  render: function(){
		return(
			<div className={'contact_item clearfix row'}>
				<figure className={'col-12 col-sm-5 col-md-3 col-lg-3 col-xl-3'}>
					<img className={'contact_image'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'}/>
				</figure>
	            <div className={'col-12 col-sm-7 col-md-9 col-lg-9 col-xl-9'}>
	                <p className={'contact_label'}>Imię: {this.props.item.firstName}</a>
	                <p className={'contact_label'}>Nazwisko: {this.props.item.lastName}</a>
	                <a className={'contact_email'}
	                 	 href={'mailto' + this.props.item.email}>Email: {this.props.item.email}
	                </a>
	            </div>
            </div>
		);
	}
});