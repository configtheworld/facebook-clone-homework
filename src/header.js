import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

function Header()	{
	return(
	
		<div className="header">
			<div className="header__left">
				<img src="https://seeklogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png" alt="" />
				
				<div class="header__input">
					<SearchIcon />
					<input type="text" placeholder="Seach on Facebook"/>
				
				</div>
			</div>
			
			<div className="header__center">
				<div className="header__option header__option--active">
					<HomeIcon fontSize="large" />
				</div>
				
				<div className="header__option">
					<EmailIcon fontSize="large" />
				</div>
				
				<div className="header__option">
					<NotificationImportantIcon fontSize="large" />
				</div>
				
			</div>
			
			
			<div className="header__right">
				<div className="header__info">
					<Avatar />
					<h4>Erkin Berk Türe</h4>
					<em>181180762</em>
				</div>
			</div>
			
		</div>
		
	)
	
}

export default Header