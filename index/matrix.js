                var n = 137;
                var m = 40;
                
                var list = ["ｱ", "ｲ", "ｳ", "ｴ", "ｵ", "ｶ", "ｷ", "ｸ", "ｹ", "ｺ", "ｻ", "ｼ", "ｽ", "ｾ", "ｿ", "ﾀ", "ﾁ", "ﾂ", "ﾃ", "ﾄ", "ﾅ", "ﾆ", "ﾇ", "ﾈ", "ﾉ", "ﾊ", "ﾋ", "ﾌ", "ﾍ", "ﾎ", "ﾏ", "ﾐ", "ﾑ", "ﾒ", "ﾓ", "ﾔ", "ﾕ", "ﾖ", "ﾗ", "ﾘ", "ﾙ", "ﾚ", "ﾛ", "ﾜ", "ｦ", "ﾝ", "!", "#", "$", "^", "*", "(", ")", "?", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
				var terms = list.length;
                
				var mytable = "<tr>";
                
                for (var i = 0; i < n; i++) {
                    mytable += "<td class=\"boxOff topRow\" id=\""+i.toString()+"\" style=\"color: black;\"></td>";
                }
                
                mytable += "</tr>";
                
				for (var i = 0; i < n*(m-1); i++) {
				  
				  if (i % n == 0 && i!= 0) {
					mytable += "</tr><tr>";
				  }
				  mytable += "<td class=\"boxOff otherRow\" id=\""+(i+n).toString()+"\" style=\"color: black;\">.</td>";
				}
                
				//document.write(mytable);
                
                var changeSpd = 22;
                
                setInterval(function() {
                  ChangeNumber();
                }, changeSpd);

                function ChangeNumber() {
                  $('.boxOn').each(function(){$(this).text(list[Math.floor(Math.random() * terms)])});
                             
                }
                
                var dropSpd = 66;
                var chance = 0.015;
                var length = 12;
                
                setInterval(function() {
                  matrix();
                }, dropSpd);
                
                function matrix() {
                    $($('.otherRow').get().reverse()).each(function(){
                        if ($('#'+(Number($(this).attr('id')) - n).toString()).hasClass("boxStart")){
                            $(this).addClass("boxOn boxStart new");
                            $(this).text(Math.floor(Math.random() * 10));
                            $(this).css("color","white");
                        }
                    });
                    
                    $('.boxOff').each(function(){
                        if ($(this).hasClass("new")){
                            $(this).removeClass("new");
                        }
                        else if ($(this).hasClass("boxStart")){
                            $(this).removeClass("boxStart");
                            $(this).addClass("boxFade");
                            $(this).addClass(length.toString());
                            $(this).css("color","#00FF00");
                        }
                       
                        for (var i = 1; i < length+1; i++){
                            if($(this).hasClass(i.toString())){
                                $(this).removeClass(i.toString());
                                $(this).addClass((i-1).toString());
                                var color = "#00" + (Math.floor(i*255/length)).toString(16) + "00";
                                $(this).css("color",color);
                            }
                        }
                        
                        if ($(this).hasClass("buffer")){
                            $(this).removeClass("buffer");
                            $(this).removeClass("boxOn");
                        }
                        
                        if ($(this).hasClass("0")){
                            $(this).removeClass("boxFade");
                            $(this).addClass("buffer");
                            $(this).removeClass("0");
                            $(this).css("color","#000000");
                        }
                    });
                    
                    $('.topRow').each(function(){
                         if (Math.random() < chance && !($(this).hasClass("boxOn"))){
                                $(this).addClass("boxOn boxStart");
                                $(this).css("color","white");
                        }
                    });
                }