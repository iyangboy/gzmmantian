
        var nameValue = document.getElementsByClassName('name')[0];
        var idcardValue = document.getElementsByClassName('idcard')[0];
        var yearValue = document.getElementsByClassName('year')[0];
        var monthValue = document.getElementsByClassName('month')[0];
        var daysValue = document.getElementsByClassName('days')[0];
		
		var $pt = $(".pt"),
			$company = $(".company");
        


        function GetQueryString(value) {
           var reg = new RegExp("(^|&)" + value + "=([^&]*)(&|$)", "i");
           var r = window.location.search.substr(1).match(reg);
                
           if (r!=null) return (r[2]); return null;
        }

       var named = GetQueryString("name");
       var idcard = GetQueryString("idNo");
       var dataValue = GetQueryString("dateStr");
       var ptvalue = GetQueryString("pt");
       var companyvalue = GetQueryString("company");

        if(named !=null && named.toString().length>1){
                nameValue.innerHTML = decodeURIComponent(named);//解码
        }
        if(idcardValue !=null && idcardValue.toString().length>1){
                idcardValue.innerHTML = idcard;
        }
        // var dataValue = '2018-12-05'
        if(dataValue !=null && dataValue.toString().length>1){
                yearValue.innerHTML = dataValue.split('-')[0];
                monthValue.innerHTML = dataValue.split('-')[1];
                daysValue.innerHTML = dataValue.split('-')[2];
        }
		
		if(ptvalue !=null && ptvalue.toString().length>1){
			$pt.html(decodeURIComponent(ptvalue));
		}
		
		if(companyvalue !=null && companyvalue.toString().length>1){
			$company.html(decodeURIComponent(companyvalue));
		}


