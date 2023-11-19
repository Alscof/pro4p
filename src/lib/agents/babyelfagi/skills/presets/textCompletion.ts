import { AgentTask } from '@/types';
import { Skill } from '../skill';

export class TextCompletion extends Skill {
  name = 'text_completion';
  descriptionForHuman =
    "A tool that uses OpenAI's text completion API to generate, summarize, and/or analyze text.";
  descriptionForModel =
    "A tool that uses OpenAI's text completion API to generate, summarize, and/or analyze text.";
  icon = '🤖';
  apiKeysRequired = ['openai'];

  async execute(
    task: AgentTask,
    dependentTaskOutputs: string, 
    objective: string,
    modelName: string,
  ): Promise<string> {
    if (!this.valid) return '';

    const prompt = `You are a university student who finished working 
    on a project and is submitting it to a university professor for marking. 
    Complete your assigned task by writing well-researched, fully detailed and 
    well-explained content based on the objective and only based on information 
    provided in the dependent task output, if provided, to get the highest marks possible. 
    Do not teach how to achieve the objective. explain how objective was achieved. 
    use APA research format of writing and use a lot of {Parenthetical citations} in most paragraphs.
    Avoid using repeatitive phrases.
    Use the information below and style below in quotes to create a dissertation for a masters degree student to pass exams. use the contents to create new dissertation based on the heading given. Include all sections that mean the introduction, background of the study, problem statement, literature review, objectives, research questions, theoretical framework, and research methodology. Make sure the length of sections is almost identical. This is the example you should use. 
    Output must be answered in ${this.language}.
    Your objective: ${objective}. \n###
    Your task: ${task.task} \n###
    Dependent tasks output: ${dependentTaskOutputs}  ###
    RESPONSE:`;

    return this.generateText(prompt, task, {
      temperature: 0.2,
      maxTokens: 4000,
      modelName:
        modelName === 'gpt-4-1106-preview' ? modelName : 'gpt-3.5-turbo-16k',
    });
  }
}
