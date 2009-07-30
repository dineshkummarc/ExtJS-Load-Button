Ext.ns('Ext.ux');

Ext.ux.LoadButton = Ext.extend(Ext.Toolbar.Button, {

    onClick : function(e){
        if(e){
            e.preventDefault();
        }
        if(e.button != 0){
            return;
        }
        if(!this.disabled){
            if(this.enableToggle && (this.allowDepress !== false || !this.pressed)){
                this.toggle();
            }
            if(this.menu && !this.menu.isVisible() && !this.ignoreNextClick){
                this.showMenu();
            }
            this.fireEvent("click", this, e);
            if(this.handler){
                //this.el.removeClass("x-btn-over");

                this.setLoadIcon();
                this.handler.call(this.scope || this, this, e);
            }
        }
    },
    setLoadIcon : function()
    {
        this.el.child('button').setStyle('background-image','url('+this.loadicon+')');
    },
    resetIcon : function()
    {
        this.el.child('button').setStyle('background-image','url('+this.icon+')');
    }
});

Ext.reg('tbloadbutton',Ext.ux.LoadButton);