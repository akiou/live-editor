window.ASTBuilder = {
    /**
     * @param {Array} elements
     */
    ArrayExpression(elements) {
        return {
            type: "ArrayExpression",
            elements: elements
        };
    },
    /**
     * @param {Expression} left
     * @param {string} operator: "=", "+=", "-=", "*=", "/=", etc.
     * @param {Expression} right
     */
    AssignmentExpression(left, operator, right) {
        return {
            type: "AssignmentExpression",
            left: left,
            operator: operator,
            right: right
        };
    },
    /**
     * @param {Expression} left
     * @param {string} operator: "+", "-", "*", "/", "<", ">", "<=", ">=", etc.
     * @param {Expression} right
     */
    BinaryExpression(left, operator, right) {
        return {
            type: "BinaryExpression",
            left: left,
            operator: operator,
            right: right
        };
    },
    /**
     * @param {Array} body: an array of Expressions
     */
    BlockStatement(body) {
        return {
            type: "BlockStatement",
            body: body
        };
    },
    /**
     * @param {Expression} callee
     * @param {Array} args
     */
    CallExpression(callee, args) {
        return {
            type: "CallExpression",
            callee: callee,
            arguments: args
        };
    },
    /**
     * @param {Expression} expression
     */
    ExpressionStatement(expression) {
        return {
            type: "ExpressionStatement",
            expression: expression
        };
    },
    /**
     * @param {Statement} init
     * @param {Expression} test
     * @param {Expression} update
     * @param {Statement} body
     */
    ForStatement(init, test, update, body) {
        return {
            type: "ForStatement",
            init: init,
            test: test,
            update: update,
            body: body
        }
    },
    /**
     * @param {string} id
     * @param {Array} params
     * @param {Statement} body
     */
    FunctionExpression(id, params, body) {
        return {
            type: "FunctionExpression",
            id: id,
            params: params,
            body: body,
            generator: false,
            expression: false
        }
    },
    /**
     * @param {string} name
     */
    Identifier(name) {
        return {
            type: "Identifier",
            name: name
        };
    },
    /**
     * @param {Expression} test
     * @param {Statement} consequent: usually a BlockStatement
     * @param {Statement?} alternate: usually a BlockStatement when not omitted
     */
    IfStatement(test, consequent, alternate = null) {
        return {
            type: "IfStatement",
            test: test,
            consequent: consequent,
            alternate: alternate
        };
    },
    /**
     * @param {Number|String|null|RegExp} value
     */
    Literal(value) {
        return {
            type: "Literal",
            value: value
        };
    },
    /**
     * @param {Expression} object
     * @param {Expression} property
     * @param {Boolean?} computed - true => obj[prop], false => obj.prop
     */
    MemberExpression(object, property, computed = false) {
        return {
            type: "MemberExpression",
            object: object,
            property: property,
            computed: computed
        };
    },
    /**
     * @param {Identifier} callee
     * @param {Array} args
     */
    NewExpression(callee, args) {
        return {
            type: "NewExpression",
            callee: callee,
            arguments: args
        };
    },
    /**
     * @param {Expression?} argument
     */
    ReturnStatement(argument) {
        return {
            type: "ReturnStatement",
            argument: argument
        };
    },
    /**
     * @param {Expression} argument
     * @param {string} operator: "++" or "--"
     * @param {Boolean} prefix: true => ++argument, false => argument++
     */
    UpdateExpression(argument, operator, prefix) {
        return {
            type: "UpdateExpression",
            argument: argument,
            operator: operator,
            prefix: prefix
        };
    },
    /**
     * @param {Array} declarations
     * @param {string} kind: "var", "let", "const"
     */
    VariableDeclaration(declarations, kind) {
        return {
            type: "VariableDeclaration",
            declarations: declarations,
            kind: kind
        };
    },
    /**
     * @param {String} id
     * @param {Expression?} init
     */
    VariableDeclarator(id, init) {
        return {
            type: "VariableDeclarator",
            id: id,
            init: init
        };
    }
};
