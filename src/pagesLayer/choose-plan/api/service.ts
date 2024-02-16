const urlPlan = '/api/quiz-results';

export const submitPlan = async (formData: { selectedPlan: string }) => {
  try {
    const response = await fetch(urlPlan, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('plan data:', data);
    } else {
      console.error('Error submitting plan');
    }
  } catch (error) {
    console.error('An error occurred while submitting plan:', error);
  }
};
