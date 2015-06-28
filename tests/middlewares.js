var assert      = require("assert");
var Middleware  = require('../libs/middlewares');

describe('middlewares', function(){
    describe('run without error', function(){
        it('match on (1)first function', function(done){
            var m = new Middleware();
            m.register('first', function(res, next){
                if(res == 1){
                    assert.equal( 1, 1, 'equal 1' );
                    done();
                }
                else
                    next();
            });
            m.register('second', function(err, res, next){
                if(res == 2){
                    done(new Error( 'equal 2' ));
                }
                else
                    next();
            });
            assert.equal(m._services.length, 2, 'services.length equal 2');
           
            m.start(1);
        });

        it('match on (2)second function', function(done){
            var m = new Middleware();
            m.register('first', function(res, next){
                if(res == 1){
                    done(new Error( 'equal 1' ));
                }
                else
                    next();
            });
            m.register('second', function(err, res, next){
                if(res == 2) {
                    assert.equal( 2, 2, 'equal 2' );
                    done();
                }
                else
                    next();
            });
            assert.equal(m._services.length, 2, 'services.length equal 2');
            m.start(2);
        });

        it('done function', function(done){
            var m = new Middleware();
            m.register('first', function(res, next){
                next();
            });
            m.register('second', function(err, res, next){
                next();
            });
            assert.equal(m._services.length, 2, 'services.length equal 2');
            m.start(1, function (err, res) {
                if(err)
                    done(err);
                if(res == 1)
                    done();
                else
                    done(new Error('not equal 1'));
            });
        });
    })

    describe('run with error', function(){
        it('error on (1)first function', function(done){
            var m = new Middleware();
            m.register('first', function(res, next){
                if(res == 1){
                    throw new Error( 'equal 1' );
                }
                else
                    next();
            });
            m.register('second', function(err, res, next){
                if(err){
                    assert.equal( err.message, 'equal 1', '2 message matched' );
                    done();
                }
                else {
                    done(new Error('not found error'));
                }
            });
            assert.equal(m._services.length, 2, 'services.length equal 2');
            m.start(1);
        });
        it('error on (2)second function', function(done){
            var m = new Middleware();
            m.register('first', function(res, next){
                if(res == 1){
                    throw new Error( 'equal 1' );
                }
                else
                    next();
            });
            m.register('second', function(err, res, next){
                if(res == 2){
                    throw new Error( 'equal 2' );
                }
                else
                    next();
            });
            m.register('third', function(err, res, next){
                if(err){
                    assert.equal( err.message, 'equal 2', '2 message matched' );
                    done();
                }
                else {
                    done(new Error('not found error'));
                }
            });
            assert.equal(m._services.length, 3, 'services.length equal 3');
            m.start(2);
        });

        it('error on (2)second anonymous function', function(done){
            var m = new Middleware();
            m.register('first', function(res, next){
                if(res == 1){
                    throw new Error( 'equal 1' );
                }
                else
                    next();
            });
            m.register('second', function(err, res, next){
                if(res == 2){
                    throw new Error( 'equal 2' );
                }
                else
                    next();
            });
            m.register(function(err, res, next){
                if(err){
                    assert.equal( err.message, 'equal 2', '2 message matched' );
                    done();
                }
                else {
                    done(new Error('not found error'));
                }
            });
            assert.equal(m._services.length, 3, 'services.length equal 3');
            m.start(2);
        });
    })
});