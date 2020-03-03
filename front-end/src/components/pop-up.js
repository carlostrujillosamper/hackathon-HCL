import React, { Component } from 'react'
import '../style.css';


export default class PopUp extends Component {

    render() {
        return (
            <div class="container">  
                <div class="modal-dialog">
					<div class="modal-content">
					
						<div class="modal-header">
							<h4 class="modal-title" id="modalLabel2">New Transfer</h4>
							<button type="button" class="m-close" data-dismiss="modal" aria-label="Close">
								<i class="ti-close">X</i>
							</button>
						</div>
						
						<div class="modal-body">
					
							
							<form>
                            <div class="form-group">
                           
										<label>State</label>
										<select data-placeholder="Choose Sate" class="form-control chosen-select" tabindex="-1">
											<option>2</option>
											<option>3s</option>
											<option>4</option>
											<option>5</option>
										</select>
									</div>
							
							
								<div class="form-group">
									<label>Amount</label>
									<input type="email" class="form-control" placeholder="Username"/>
								</div>
                                <div class="form-group">
                                    <label>Description</label>
									<textarea class="h-100 form-control"></textarea>
								</div>
								
								
								
								<div class="center">
									<button type="submit" id="login-btn" class="btn btn-midium theme-btn btn-radius width-200"> Createa a Nueva Acount </button>
								</div>
								
							</form>
							
							
							<div class="center mrg-top-5">
								<div class="bottom-login text-center">Don't have an account</div>
								<a href="javascript:void(0)" class="theme-cl" data-toggle="modal" data-dismiss="modal" data-target="#register">Create An Account</a>
							</div>
							
							
						</div>
						
					</div>
				</div>
                        </div>
        )
    }
}

