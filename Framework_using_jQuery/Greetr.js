(function (global,$){
    var Greetr = function (firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }
    
    var supportedLangs = ['en', 'es'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var loggedMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };
    
    Greetr.prototype = {
        
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        
        validated: function (){
            if (supportedLangs.indexOf(this.language) === -1) {
                 throw 'Invalid language';
            }
        },
        
        greeting: function (){
            return greetings[this.language] + ' ' + this.firstName;
        },
        
        formalGreeting: function (){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function(formal){
            var msg;
            
            if (formal){
                msg = this.formalGreeting();
            } 
            else {
                msg = this.greeting();
            }
            
            if (console){
                console.log(msg);
            }
            
            return this;
        },
        
        setLang: function(lang){
         
            this.language = lang;
          
            this.validated();
            
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(loggedMessages[this.language] + ':' + this.firstName);
            }
            
        },
        
        HTMLGreet: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';
            }
            
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            $(selector).html(msg);
             
            return this;
        }
        
    };
    
    Greetr.init = function (firstName, lastName, language){
        
        var self = this
        self.firstName = firstName || ' ';
        self.lastName = lastName || ' ';
        self.language = language || 'en';
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
} (window,jQuery));
