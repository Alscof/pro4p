export const searchQueryPrompt = (task: string, dependent_task: string) => {
  return `You are an AI assistant tasked with text completion based on the following task: ${task}. 
  ${
    dependent_task.length > 0
      ? `Consider the results of dependent tasks: ${dependent_task}.`
      : ''
  }
  If the task looks like a search query, return the identical search query as your response.
  use text completion:`;
};

export const analystPrompt = (results: string, language: string) => {
  return `You are an expert analyst. Use the following information to write well-researched, detailed, and explained chapter to be part of an APA style research paper without removing any facts.
  Report must be answered in ${language}.
  \n###INFORMATION:${results}.\n###REPORT:`;
};

export const textCompletionToolPrompt = (
  objective: string,
  language: string,
  task: string,
  dependentTaskOutput: string,
) => {
  let prompt = `You are a university professor, Complete your assigned task by writing well-researched, detailed, and explained chapter to be part of an APA style research paper based on the objective and only based on information provided in the dependent task output, if provided. for every topic or task, create 5 to 12 detail and well explained points with Parenthetical citations. Avoid using repeative phrases.
      Your objective: ${objective}. Your task: ${task}
   Output must be answered in ${language}.\n
   `;
  if (dependentTaskOutput !== '') {
    prompt += `Your dependent tasks: ${dependentTaskOutput}\n OUTPUT:`;
  } else {
    prompt += '\nOUTPUT:';
  }
  return prompt;
};
