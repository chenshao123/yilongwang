<template>
  <div id="register">
  	<div class="logo"><i></i></div>
  	<div class="loginbox">
  		<div><img src="../assets/C.png" alt=""></div>
  		<div class="formbox">
  			<div class="nav_login">
  				<lable class="lable"><input type="radio" name="sex" checked="checked">&nbsp;&nbsp;普通登录</lable>
  				<lable class="lable"><input type="radio" name="sex">&nbsp;&nbsp;手机动态密码登录</lable>
  			</div>
  			<!-- <div class="DynamicLogo">
  				<div class="inputbox">
  					<input type="text" placeholder="用户名/卡号/手机号/邮箱">
  					<i></i>
  				</div>
  				<div class="inputbox">
  					<input type="text" placeholder="密码">
  					<span></span>
  				</div>
  				<div class="err">
  					<input type="text" placeholder="验证码">
  					<span>7925</span>
  					<a href="javascript:;">换一张</a>
  				</div>
  				<div class="forget">
  					<span>√</span>
  					<span>两个月内免登陆</span>
  				</div>
  				<div class="loginbtn"><a href="javascript:;">登录</a></div>
  			</div> -->

  			<div class="Dynamic">
  				<div class="inputbox">
  					<select name="">
	                	<option value="">中国大陆+86</option>
	                	<option value="">中国香港+852</option>
	                	<option value="">中国澳门+853</option>
	                	<option value="">中国台湾+886</option>
                   </select>
  					<input type="text" placeholder="请输入手机号">
  					
  				</div>
  				<div class="err">
  					<input type="text" placeholder="验证码">
  					<span>7925</span>
  					<a href="javascript:;">换一张</a>
  				</div>
  				<div class="inputbox box">
  					<input  type="text" placeholder="密码">
  					<span>获取动态密码</span>
  				</div>
  				<div class="forget">
  					<span>√</span>
  					<span>记住我</span>
  				</div>
  				<div class="loginbtn"><a href="javascript:;">登录</a></div>
  			</div>
  		</div>
  	</div>
  	<br>
  	<div class="register_tip">
  		<a href="">立即注册<i></i></a>
  	</div>
  	<br>
  	<br>
  	<br>
  	<div class="footer">
  		<p>
  			<a href="javascript:;"><i class="ip_one"></i>iPhone/iPad</a>
  			<a href="javascript:;"><i class="and_ld"></i>Androld</a>
  		</p>
  		<p>
  			<a href="javascript:;">代理合作</a>
  			<i>|</i>
  			<a href="javascript:;">广告服务</a>
            <i>|</i>
  			<a href="javascript:;">联系我们</a>
  			<span>©1999 - 2014 eLong, Inc or its affiliates. All Rights Reserved.</span>
  		</p>
  	</div>
  </div>
</template>
<script>
export default {
	name: "register",
	data (){
	  return {

	  }
	}
}
</script>
<style lang="scss" scope>
*{
	padding:0;
	margin:0;
}
html{
	background:#E8EFF6;
}
.logo{
   width:1000px;
   height:100px;
   margin:0 auto;
   // background:red;
   overflow:hidden;
   i{
   	display:block;
   	width:113px;
   	height:48px;
   	background:url(../assets/myelong_login.png) no-repeat 0 0;
    margin:26px 0 0 0;
   }
}
.loginbox{
	width:1000px;
	height:350px;
	background:#fff;
	margin:0 auto;
	display:flex;
	justify-content:space-between;
	.formbox{
		width:375px;
		height:346px;
		background:#fff;
		.nav_login{
			height:50px;
			.lable{
                font-size:12px;
                margin:0 0 0 60px;
                line-height:50px;
                	// padding:50px 0 0 0;
                input{
                	// margin:50px 0 0 0;
                }
			}
		}
		// .DynamicLogo{
		// 	width:285px;
		// 	height:277px;
		// 	margin:0 auto;
		// 	// background:yellow;
		// 	.inputbox{
		// 		width:280px;
		// 		height:35px;
		// 		border:1px solid gray;
		// 		margin:20px 0 0 0;
		// 		display:flex;
	 //            justify-content:space-between;
	 //            background:#fff;
		// 		input{
		// 			width:90%;
		// 			height:100%;
		// 			border:0;
		// 		}
		// 		i{
		// 			display:block;
		// 			width:30px;
		// 			height:30px;
		// 			background:url(../assets/myelong_login.png) -108px -271px no-repeat;
		// 		}
		// 		span{
		// 			display:block;
		// 			width:30px;
		// 			height:30px;
		// 			background:url(../assets/myelong_login.png) -135px -271px no-repeat;
		// 		}
		// 	}
		// 	.err{
		// 		width:280px;
		// 		height:35px;
		// 		// border:1px solid gray;
		// 		margin:20px 0 0 0;
		// 		border:0;
		// 		input{
		// 		    border:1px solid red;
		// 		    height:100%;
		// 			width:40%;
		// 		}
		// 		span{
		// 			padding:6px 8px 6px 8px;
		// 		}
		// 		a{
		// 			text-decoration:none;
		// 			font-size:10px;

		// 		}
		// 		a:hover{
		// 			color:red;
		// 		}
		// 	}
		// 	.forget{
		// 		margin:20px 0 0 0;
		// 		span:nth-of-type(1){
		// 			float:left;
		// 			display:block;
		// 			width:13px;
		// 			height:13px;
		// 			background:blue;
		// 			color:#ccc;
		// 			font-size:4px;
		// 			line-height:20px;
		// 			font-weight:bold;
		// 			text-align:center;
		// 			cursor:pointer;
		// 			margin:3px 0 0 0;
		// 		}
		// 		span:nth-of-type(2){
		// 			font-size:12px;
		// 			padding:0 0 0 3px;
		// 		}
		// 	}
		// 	.loginbtn{
		// 		width:285px;
		// 		height:40px;
		// 		background:#ff8800;
		// 		text-align:center;
		// 		cursor:pointer;
		// 		margin:20px 0 0 0;
		// 		a{
		// 			text-decoration:none;
		// 			line-height:40px;
		// 			color:#fff;
		// 			font-weight:bold;

		// 		}
		// 	}
		// 	.loginbtn:hover{
		// 		background:#ff6000;
		// 	}
		// }




		.Dynamic{
			width:285px;
			height:277px;
			margin:0 auto;
			// background:yellow;
			.inputbox{
				width:280px;
				height:35px;
				margin:20px 0 0 0;
				display:flex;
	            justify-content:space-between;
	            background:#fff;
				input{
					width:70%;
					height:100%;
					border:0;
				    margin:0 0 0 10px;
					border:1px solid gray;
				}
				
			}
			.box{
				input{
					margin:0;
					width:56%;
				}
				span{
					text-align:center;
					display:block;
					width:110px;
					height:37px;
					line-height:35px;
					background:#37c;
					border-radius:5px;
					cursor:pointer;
					color:#fff;
					font-size:13px;
				}
			}
			.err{
				width:280px;
				height:35px;
				// border:1px solid gray;
				margin:20px 0 0 0;
				border:0;
				input{
				    border:1px solid red;
				    height:100%;
					width:40%;
				}
				span{
					padding:6px 8px 6px 8px;
				}
				a{
					text-decoration:none;
					font-size:10px;

				}
				a:hover{
					color:red;
				}
			}
			.forget{
				margin:20px 0 0 0;
				span:nth-of-type(1){
					float:left;
					display:block;
					width:13px;
					height:13px;
					background:blue;
					color:#ccc;
					font-size:4px;
					line-height:20px;
					font-weight:bold;
					text-align:center;
					cursor:pointer;
					margin:3px 0 0 0;
				}
				span:nth-of-type(2){
					font-size:12px;
					padding:0 0 0 3px;
				}
			}
			.loginbtn{
				width:285px;
				height:40px;
				background:#ff8800;
				text-align:center;
				cursor:pointer;
				margin:20px 0 0 0;
				a{
					text-decoration:none;
					line-height:40px;
					color:#fff;
					font-weight:bold;

				}
			}
			.loginbtn:hover{
				background:#ff6000;
			}
		}




	}
}
.register_tip{
	width:1000px;
	height:15px;
	margin:0 auto;
	// background:red;
	a{
		float:right;
		text-decoration:none;
		font-size:14px;
		i{
			display:block;
			width:15px;
			height:15px;
			background:url(../assets/myelong_login.png) 0 -430px no-repeat;
			float:right;
			margin:3px 0 0 6px;
		}
	}
}
.register_tip:hover{
	a{
		color:#ff6000;
		i{
			background:url(../assets/myelong_login.png) 0 -445px no-repeat;
		}
	}

}
.footer{
	width:1000px;
	margin:0 auto;
    // background:red;
    overflow:hidden;
    text-align:center;
    p:nth-of-type(1){
        width:300px;
        height:20px;
        margin:0 auto;
        // background:aqua;
    	a{
    		float:left;
		    text-decoration:none;
		    font-size:14px;
		    margin:0 0 0 40px;
		    font-size:15px;
		    color:#6e7179;
    		.ip_one{
    			display:block;
    			width:18px;
    			height:22px;
    			background:url(../assets/myelong_login.png) 0 -277px no-repeat;
    			float:left;
    			margin:0 6px 0 0 ;
    		}
    		.and_ld{
    			display:block;
    			width:18px;
    			height:22px;
    			background:url(../assets/myelong_login.png) -25px -278px no-repeat;
    			float:left;
    			margin:0 6px 0 0 ;
    		}
    	}
    	a:hover{
    		color:#ff8800;
    		.ip_one{
                background:url(../assets/myelong_login.png) 0 -304px no-repeat;
    		}
    		.and_ld{
                background:url(../assets/myelong_login.png) -25px -305px no-repeat;
    		}
    	}
    }
    p:nth-of-type(2){
    	overflow:hidden;
    	margin:20px 0 0 0;
    	a{
    		text-decoration:none;
    		color:#6e7179;
    		font-size:12px;
    	}
    	a:hover{
    		color:#ff8800;
    	}
    	i{
    		color:#6e7179;
    	}
    	span{
    		font-size:14px;
    		margin:0 0 0 20px;
    	}
    }
}
</style>