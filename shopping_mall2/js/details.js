window.onload = function(){
				var oNum = document.getElementById("m_number");
				var oNum2 = document.getElementById("m_number2");
				var oL = document.getElementById("l");
				var oR = document.getElementById("r");
				var oL2 = document.getElementById("l2");
				var oR2 = document.getElementById("r2");
				var num = 1;
				var num2 = 1;
				if(oR.addEventListener||oL.addEventListener||oR2.addEventListener||oL2.addEventListener){
					oR.addEventListener("click",fnclick2);
					oL.addEventListener("click",fnclick1);
					oR2.addEventListener("click",fnclick4);
					oL2.addEventListener("click",fnclick3);
				}else{
					oR.attachEvent("onclick",fnclick2);
					oL.attachEvent("onclick",fnclick1);
					oR2.attachEvent("onclick",fnclick4);
					oL2.attachEvent("onclick",fnclick3);
				}
				
				
			function fnclick1 (){
					num--
					if(num<1){
						num=1
					}
					oNum.value = num;	
			}
				function fnclick2 (){
					num++
					oNum.value = num;
				}	
				function fnclick3 (){
					num2--
					if(num2<1){
						num2=1
					}
					oNum2.value = num2;	
			}
				function fnclick4 (){
					num2++
					oNum2.value = num2;
				}	
				/**/
			var oBuy = document.getElementsByClassName("buy")[0];
			var oGive = document.getElementsByClassName("give")[0];
			var oOrder = document.getElementsByClassName("order")[0];
			var oOrder2 = document.getElementsByClassName("order2")[0];
			var oClose = document.getElementsByClassName("m_close")[0];
			var oClose2 = document.getElementsByClassName("m_close2")[0];
			if(oBuy.addEventListener||oClose.addEventListener||oGive.addEventListener||oClose2.addEventListener){
				oBuy.addEventListener("click",m_show);
				oClose.addEventListener("click",m_hide);
				oGive.addEventListener("click",m_show2);
				oClose2.addEventListener("click",m_hide2);
			}else{
				oBuy.attachEvent("onclick",m_show);
				oClose.attachEvent("onclick",m_hide);
				oGive.attachEvent("onclick",m_show2);
				oClose2.attachEvent("onclick",m_hide2)
			}
				function m_show(){
					oOrder.style.display = "block"
				}
				function m_hide(){
					oOrder.style.display = "none"
				}
				function m_show2(){
					oOrder2.style.display = "block"
				}
				function m_hide2(){
					oOrder2.style.display = "none"
				}
			}