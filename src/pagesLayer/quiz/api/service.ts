const urlQuizResults = '/api/quiz-results';

export const submitQuizResults = async (formData: { email: string }, onSuccess: () => void) => {
  try {
    const response = await fetch(urlQuizResults, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('quiz-results data:', data);

      onSuccess();
    } else {
      console.error('Error submitting results');
    }
  } catch (error) {
    console.error('An error occurred while submitting results:', error);
  }
};
