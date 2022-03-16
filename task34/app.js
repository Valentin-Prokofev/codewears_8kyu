// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.
//
//     Make sure that your function does not return a false positive by just checking just the day.

// Solution:

function isToday(date) {
    let checkDay = date.toLocaleDateString();
    let today = new Date().toLocaleDateString()

    if (today === checkDay) {
        return true
    }else {
        return false
    }
}