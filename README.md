# Compatibility Predictor
## Welcome to the Compatibility Predictor!

This program will help you calculate the best candidate for your team of any size!

To use this program:
1. Clone the repo with the `git clone [SSH key or HTTPS address]` command.
1. Run `npm install` in the file directory.
1. Finally run `node compatibilityPredictor.js` on the command line.

The person with the highest score will be the best candidate for the job!

### Sample Data
-----
Input:
```
{
    "team" : [
        {
            "name" : "Eddie",
            "attributes" : {
                "intelligence" : 1,
                "strength" : 5,
                "endurance" : 3,
                "spicyFoodTolerance" : 1
            }
      }, {
            "name" : "Will",
            "attributes" : {
                "intelligence" : 9,
                "strength" : 4,
                "endurance" : 1,
                "spicyFoodTolerance" : 6
            }
      }, {
            "name" : "Mike",
            "attributes" : {
                "intelligence" : 3,
                "strength" : 2,
                "endurance" : 9,
                "spicyFoodTolerance" : 5
            },
      }
    ],
    "applicants" : [
      {
            "name" : "John",
            "attributes" : {
                "intelligence" : 4,
                "strength" : 5,
                "endurance" : 2,
                "spicyFoodTolerance" : 1
            },
      },
      {
            "name: "Jane",
            "attributes" : {
                "intelligence" : 7,
                "strength" : 4,
                "endurance" : 3,
                "spicyFoodTolerance" : 2
            },
      },
      {
            "name" : "Joe",
            "attributes" : {
                "intelligence" : 1,
                "strength" : 1,
                "endurance" : 1,
                "spicyFoodTolerance" : 10
            },
      }
    ]
}
```
Output:
```
{
    “scoredApplicants” : [
        {
            “name” : “John”,
            “score” : 0.3
        }, {
            “name” : “Jane”,
            “score” : 0.4
        }, {
            “name” : “Joe”,
            “score” : 0.3
        }
    ]
}
```