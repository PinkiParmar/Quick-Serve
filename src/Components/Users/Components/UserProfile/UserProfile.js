import React from "react";
import {Link} from "react-router-dom"
export default function UserProfile(){
    return(
        <>
        <section className="py-5 my-5">
		<div className="container">
			<h1 className="mb-5">User Profile</h1>
			<div className="bg-white shadow rounded-lg d-block d-sm-flex">
				<div className="profile-tab-nav border-right">
					<div className="p-4">
						<div className="img-circle text-center mb-3">
                        <h4 className="text-center">My Profile</h4>
						</div> 
						<h4 className="text-center">User_Name</h4>
					</div>
					<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<Link className="nav-link active" id="account-tab" data-toggle="pill" to="#account" role="tab" aria-controls="account" aria-selected="true">
							<i className="fa fa-home text-center mr-1"></i> 
							My profile
						</Link>
						<Link className="nav-link" id="password-tab" data-toggle="pill" to="#password" role="tab" aria-controls="password" aria-selected="false">
							<i className="fa fa-key text-center mr-1"></i> 
							Password
						</Link>
						<Link className="nav-link" id="security-tab" data-toggle="pill" to="#security" role="tab" aria-controls="security" aria-selected="false">
							<i className="fa fa-heart text-center mr-1"></i> 
							Wishlist
						</Link>
						<Link className="nav-link" id="application-tab" data-toggle="pill" to="#application" role="tab" aria-controls="application" aria-selected="false">
							<i className="fa fa-tv text-center mr-1"></i> 
							My Orders
						</Link>
						<Link className="nav-link" id="notification-tab" data-toggle="pill" to="#notification" role="tab" aria-controls="notification" aria-selected="false">
							<i className="fa fa-check text-center mr-1"></i> 
							Review
						</Link>
						<Link className="nav-link" id="notification-tab" data-toggle="pill" to="#notification" role="tab" aria-controls="notification" aria-selected="false">
							<i className="fa fa-bell text-center mr-1"></i> 
							Notifications
						</Link>
						<Link className="nav-link" id="notification-tab" data-toggle="pill" to="#notification" role="tab" aria-controls="notification" aria-selected="false">
							<i className="fa fa-road text-center mr-1"></i> 
							Track Order
						</Link>
						<Link className="nav-link" id="notification-tab" data-toggle="pill" to="#notification" role="tab" aria-controls="notification" aria-selected="false">
							<i className="fa fa-bin text-center mr-1"></i> 
							<span style = {{color : "red"}}>Delete Profile</span>
						</Link>
						<Link className="nav-link" id="" data-toggle="" to="./index.html" role="tab" aria-controls="notification" aria-selected="false">
							<i className="fa fa- text-center mr-1"></i> 
							Logout
						</Link>
					</div>
				</div>
				<div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
					<div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
						<h3 className="mb-4">Account Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>First Name</label>
								  	<input type="text" className="form-control" value="First name"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Last Name</label>
								  	<input type="text" className="form-control" value="Last name"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>UserName</label>
								  	<input type="text" className="form-control" value="user namme"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Email</label>
								  	<input type="text" className="form-control" value="your@gmail.com"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Phone number</label>
								  	<input type="text" className="form-control" value="+91 9876543215"/>
								</div>
							</div>
							
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Password</label>
								  	<input type="password" className="form-control" value="password"/>
								</div>
							</div>
							
							<div className="col-md-12">
								<div className="form-group">
								  	<label>Bio-User</label>
									<textarea className="form-control" rows="4">My name is  ....</textarea>
								</div>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
					<div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
						<h3 className="mb-4">Password Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Old password</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>New password</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Confirm new password</label>
								  	<input type="password" className="form-control"/>
								</div>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div>
					</div>
					<div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
						 <h3 className="mb-4">Security Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Login</label>
								  	<input type="text" className="form-control"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
								  	<label>Two-factor auth</label>
								  	<input type="text" className="form-control"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="recovery"/>
										<label className="form-check-label" for="recovery">
										Recovery
										</label>
									</div>
								</div>
							</div>
						</div> 
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div> 
					</div>
					<div className="tab-pane fade" id="application" role="tabpanel" aria-labelledby="application-tab">
						<h3 className="mb-4">Application Settings</h3>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="app-check"/>
										<label className="form-check-label" for="app-check">
										App check
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
										<label className="form-check-label" for="defaultCheck2">
										Lorem ipsum dolor sit.
										</label>
									</div>
								</div>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div> 
					</div>
					<div className="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
						<h3 className="mb-4">Notification Settings</h3>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="notification1"/>
								<label className="form-check-label" for="notification1">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, neque cupiditate quis
								</label>
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="notification2" />
								<label className="form-check-label" for="notification2">
									hic nesciunt repellat perferendis voluptatum totam porro eligendi.
								</label>
							</div>
						</div>
						<div className="form-group">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="notification3"/ >
								<label className="form-check-label" for="notification3">
									commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit
								</label>
							</div>
						</div>
						<div>
							<button className="btn btn-primary">Update</button>
							<button className="btn btn-light">Cancel</button>
						</div> 
					</div>
				</div>
			</div>
		</div>
	</section>
        </>

    )
}