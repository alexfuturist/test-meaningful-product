# Test Task

Developed by Oleksandr Krysenko.

Check out the deployed application by the link - [https://test-meaningful-product.vercel.app/](https://test-meaningful-product.vercel.app/)

## Basic A/B Testing Concept:
Objective: Improve user engagement and conversion rates on the quiz-form and landing page.

1. Possible UI/UX improvements in order to increase the conversion of filling out the form and choosing a tariff plan:
- Increase the time on the first slide from 2 to 4 seconds, so that the user has time to read the whole text;
- Change the error text for the email input if it is entered incorrectly from "Error" to "Enter a valid email address" (if the entered value is incorrect) and "Field is required" (if the field is empty);
- Add a dark theme, because some mobile browsers use an automatically generated dark theme, and some colors in such a dark theme do not look as contrasting as in a light one;
- Experiment with the content of the sections "What you get", "People just like you have achieved great results with the app!", "Users love the app!".
This is easy to do because I implemented the ability to automatically apply data in JSON format that can be retrieved from a database specified by content managers.


2. Variations to Test

For each improvement, it is possible to conduct appropriate A/B Testing.

Example:
Control Group (A): Email helper text without changes.
Variation Group (B): Email helper text with changes.


3. Test Duration and Traffic Allocation
Test Duration: The A/B test will run for two weeks.
Traffic Allocation: 50% of users will see the control group, and 50% will see the variation group.


4. Data Collection Metrics
Сollect the following metrics to evaluate the performance of each variation:


Click-through rate (CTR): The percentage of users who click on the CTA button.
Conversion rate: The percentage of users who complete the quiz and proceed to the landing page.


5. Communication and Reporting
Provide a final report summarizing the results and recommendations.


6. Rollout Plan
If the variation group shows an improvement in the selected metrics, implement the new helper text permanently.
