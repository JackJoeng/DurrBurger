var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

var orm = {

  selectAll: function (table, cb) {
    var query = "SELECT * FROM " + table + ";";
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (table, cols, vals, cb) {
    var query  = "INSERT INTO " + table + " ";
    query     += "("+ cols.toString() +") ";
    query     += "VALUES (" + printQuestionMarks(vals.length) + ")";

    connection.query(query, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (table, obj, condition, cb) {
    var query   = "UPDATE " + table + " ";
    query      += "SET " + objToSql(obj) + " ";
    query      += "WHERE " + condition;
    console.log(query);

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateAll: function (table, obj, cb) {
    var query   = "UPDATE " + table + " ";
    query      += "SET " + objToSql(obj) + " ";

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteOne: function (table, condition, cb) {
    var query   = "DELETE FROM " + table + " ";
    query      += "WHERE " + condition;

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

module.exports = orm;
