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
                this.setLoadIcon();
                this.handler.call(this.scope || this, this, e);
            }
        }
    },
    setLoadIcon : function()
    {
        if(this.loadicon && this.icon){
            this.el.child('button').setStyle('background-image','url('+this.loadicon+')');
        }
        else if(this.loadiconCls && this.iconCls){
            this.el.child('button').removeClass(this.iconCls).addClass(this.loadiconCls);
        }
    },
    resetIcon : function()
    {
        if(this.loadicon && this.icon){
            this.el.child('button').setStyle('background-image','url('+this.icon+')');
        }
        else if(this.loadiconCls && this.iconCls){
            this.el.child('button').removeClass(this.loadiconCls).addClass(this.iconCls)
        }
    }
});

Ext.reg('tbloadbutton',Ext.ux.LoadButton);
