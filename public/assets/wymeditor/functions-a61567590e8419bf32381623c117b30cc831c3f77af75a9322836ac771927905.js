WYMeditor.loadCss=function(e){$("<link rel='stylesheet' />").attr("href",e).appendTo($("head").get(0))},WYMeditor.INIT_DIALOG=function(e,t,i){var t=t||e.selected(),o=$("#"+e._options.dialogId),a=$(o.find("iframe").contents());o.find("#visual_editor_dialog_type").val();if(e._selected_image)var r=$(e._selected_image);else var r=$(e._doc.body).find("#"+e._current_unique_stamp);o.find("input[type=text], textarea").first().focus(),a.find("body").addClass("visual_editor_iframe_body").find("#cancel_button").add(o.find(".close_dialog")).click(function(t){e.close_dialog(t,!0)}),$(".ui-dialog-titlebar .ui-dialog-titlebar-close").click(function(t){e.close_dialog(t,!0)}),$.isFunction(e._options.preInitDialog)&&e._options.preInitDialog(e,window),$(e._options.dialogLinkSelector).find(e._options.submitSelector).click(function(t){if((sUrl=$(e._options.hrefSelector).val()).length>0)if(null!=r.get(0)){var i=$("<a></a>").attr({href:sUrl,title:$(e._options.titleSelector).val()});null!=(target=$(e._options.targetSelector).val())&&target.length>0&&i.attr("target",target),e._selected_image?null!=(parent=r.parent().get(0))&&"A"==parent.tagName.toUpperCase()?$(parent).attr({href:i.attr("href"),title:$(e._options.titleSelector).val(),target:target}):(r.before(i),$(i).append(r.get(0))):(i.attr({style:r.attr("style"),"class":r.attr("class")}),i.html(r.html()),r.replaceWith($("<div/>").append(i).html()))}else e._exec(WYMeditor.CREATE_LINK,e._current_unique_stamp),$("a[href="+e._current_unique_stamp+"]",e._doc.body).attr(WYMeditor.HREF,sUrl).attr(WYMeditor.TITLE,$(e._options.titleSelector).val()).attr(WYMeditor.TARGET,$(e._options.targetSelector).val());e.close_dialog(t)}),e._selected_image&&(imgDialog=$(e._options.dialogImageSelector),img=$(e._selected_image),size=img.attr(WYMeditor.REL)||a.find("#existing_image_size_area li.selected a").attr(WYMeditor.REL)||a.find("#existing_image_size_area li.selected a").attr("rel")||"",src=img.attr(WYMeditor.SRC),size.length>0&&(src=src.replace("_"+size+".","."),a.find("#existing_image_size_area li.selected").removeClass("selected"),a.find("#existing_image_size_area li a[href='#"+size+"']").parents("li:first").addClass("selected")),imgDialog.find(e._options.srcSelector).val(src),imgDialog.find(e._options.titleSelector).val(img.attr(WYMeditor.TITLE)),imgDialog.find(e._options.altSelector).val(img.attr(WYMeditor.ALT)),imgDialog.find(e._options.sizeSelector).val(size),(src=src.split(".")).pop(),a.find("#existing_image_area_content li img[src^='"+src+"']").parents("li:first").addClass("selected")),$(e._options.dialogImageSelector).find(e._options.submitSelector).click(function(t){form=$(this.form),null!=(url=form.find(e._options.srcSelector).val())&&url.length>0?((image=$(e._doc.createElement("IMG"))).attr(WYMeditor.SRC,url).attr(WYMeditor.TITLE,form.find(e._options.titleSelector).val()).attr(WYMeditor.ALT,form.find(e._options.altSelector).val()).attr(WYMeditor.REL,form.find(e._options.sizeSelector).val()).load(function(e){$(this).attr({width:$(this).width(),height:$(this).height()})}),null==r&&(r=$(e._doc.body).find("#"+e._current_unique_stamp)),null!=r&&r.after(image).remove(),e.close_dialog(t)):($("iframe").contents().find(".save-loader").remove(),alert("Please select an image to insert.")),t.preventDefault()}),$(e._options.dialogTableSelector).find(e._options.submitSelector).click(function(t){if((iRows=$(e._options.rowsSelector).val())>0&&(iCols=$(e._options.colsSelector).val())>0){for((table=e._doc.createElement(WYMeditor.TABLE)).createCaption().innerHTML=$(e._options.captionSelector).val(),x=0;x<iRows;x++)for(newRow=table.insertRow(x),y=0;y<iCols;y++)newRow.insertCell(y);var i=$(e.findUp(e.container(),WYMeditor.MAIN_CONTAINERS)).get(0);i&&i.parentNode?$(i).after(table):$(e._doc.body).append(table)}e.close_dialog(t)}),$(e._options.dialogPasteSelector).find(e._options.submitSelector).click(function(t){e.paste($(e._options.textSelector).val()),e.close_dialog(t)}),$(e._options.dialogPreviewSelector).find(e._options.previewSelector).html(e.xhtml()),$.isFunction(e._options.postInitDialog)&&e._options.postInitDialog(e,window)},WYMeditor.editor.prototype.close_dialog=function(e,t){t&&((span=$(this._doc.body).find("span#"+this._current_unique_stamp)).length>0&&span.parent().html(span.parent().html().replace(new RegExp(["<span(.+?)",span.attr("id"),"(.+?)</span>"].join("")),span.html())),(node=$(this._doc.body).find("#"+this._current_unique_stamp))&&(node.attr("id",node.attr("_id_before_replaceable")||""),node.removeAttr("_id_before_replaceable")),1==this._undo_on_cancel?this._exec("undo"):1==this._redo_on_cancel&&this._exec("redo")),$.browser.msie&&parseInt($.browser.version)<8&&this._iframe.contentWindow.focus(),$("#"+wym._options.dialogId).dialog("close").remove(),$(this._doc).find("a[href]").click(function(e){e.preventDefault()}),e&&e.preventDefault()},RegExp.escape=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};