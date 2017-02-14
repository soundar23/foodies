const should = require("chai").should(),
    assert = require("chai").assert,
    supertest = require("supertest"),
    app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing restaurant POST route", function(err) {
    it("should handle and send the computed info1", function(done) {
        url.post("/restaurant/addrestaurant").send({
            "resId": "40",
            "resname": "abc",
            "Description": "5",
            "location": "sadsd",
            "Review": "6",
            "Reviewcount": "5",
            "resImage": "ddfdfa"
        }).expect(200).end(function(err, res) {
            should.not.exist(err);
            (res.text).should.equal("Added restaurant successfully", "Expected value not matching with response");
            done();
        });

    });
    it("should handle and send the computed info2", function(done) {
        url.delete("/restaurant/deleterestaurant").send({"resId": "40"}).expect(200).end(function(err, res) {
            should.not.exist(err);
            (res.text).should.equal("Deleted restaurant successfully", "Expected value not matching with response");
            done();
        });

    });
    it("should handle and send the computed info3", function(done) {
        url.put("/restaurant/updaterestaurant").send({"resId": "40", "resComments": "efwwgf"}).expect(200).end(function(err, res) {
            should.not.exist(err);
            (res.text).should.equal("Read restaurant successfully", "Expected value not matching with response");
            done();
        });

    });
    it("should handle and send the computed info4", function(done) {
        url.get("/restaurant/findrestaurant").expect(200).end(function(err, res) {
            should.not.exist(err);
            (res.text).should.equal("Read Restaurant successfully", "Expected value not matching with response");
            done();
        });

    });
});
