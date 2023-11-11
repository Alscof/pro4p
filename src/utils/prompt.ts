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
   use the information in quotes in the proposal here to complete the objective "INTRODUCTION
In today's knowledge-based economy, effective knowledge management is crucial for success in both the private and public sectors (Alavi & Leidner, 2001; Davenport & Prusak, 1998). Knowledge management involves systematic and intentional efforts to generate, acquire, capture, share, and utilize knowledge to enhance organizational performance. This need for knowledge management has become increasingly urgent in contemporary Africa due to dynamic economic structures, evolving social dynamics, and constantly shifting political environments (Obi & Ugochukwu, 2019). However, there is a lack of empirical research on how knowledge management is perceived and practiced in different African contexts and organizations.
Like many other institutions in African countries, Ugandan institutions face numerous challenges related to knowledge management. These challenges include inadequate access to relevant and accurate information, insufficient appreciation for indigenous knowledge, and weak institutional support for knowledge creation and dissemination. Despite these challenges, there is a growing interest in knowledge management in Uganda, with organizations such as Makerere University, including its higher education institutions, beginning to adopt knowledge management practices.
Communication plays a vital role in knowledge management. It involves the exchange and acquisition of information through various means, including written and spoken language, both in digital and physical contexts. Effective communication techniques include creating infographics, presenting data visually, concise writing, blogging, public speaking, and engaging with social media (Stangor, 2014; Alavi & Leidner, 2001; Zaremba & d'Errico, 2019)). Additionally, storytelling is a powerful tool for effective communication (Davidson, 2017; Jones & Crow, 2017). Effective communication techniques include creating infographics, presenting data visually, using concise writing, blogging, public speaking, and engaging with social media (Partnership for 21st Century Skills, 2007; Southern Nazarene University, n.d.; West & Turner, 2010)

To better understand the current state of knowledge management in Uganda, this study aims to explore the perceptions and practices of knowledge management and communication at the Trauma, Injuries and Disability Unit (TRIAD) within Makerere's School of Public Health (MakSPH). TRIAD is a research and training unit focused on addressing trauma, injuries, and disability in Uganda and beyond. As one of the leading units within MakSPH, TRIAD generates, acquires, captures, shares, and utilizes various types of knowledge, such as scientific publications, reports, policy briefs, training materials, databases, and networks, to inform policy and practice in the field. However, TRIAD also faces challenges related to knowledge management, including inadequate access to relevant and accurate information, insufficient appreciation for indigenous knowledge, and weak institutional support for knowledge creation and dissemination.

The study will utilize the Knowledge Management Assessment Tool (KMAT) developed by Kostopoulos as the theoretical framework or conceptual model to assess knowledge management practices. The KMAT is a comprehensive and flexible tool that assesses knowledge management practices across four dimensions: knowledge generation, knowledge acquisition, knowledge capture, and knowledge sharing/use. It has been applied in various contexts, such as health care organizations, universities, and public sector organizations. In this study, the KMAT will be adapted to the specific context and characteristics of TRIAD, building upon or extending its existing framework.
This research will contribute to the body of knowledge on knowledge management in Africa (Nawaz et al., 2020) and provide valuable insights for policymakers and organizations on developing effective knowledge management strategies to enhance organizational performance. It will also emphasize the importance of indigenous knowledge and local solutions in addressing the challenges of trauma, injuries, and disability in Uganda. Furthermore, the study will enhance TRIAD's capacity to evaluate and improve its own knowledge management practices and impact.
BACKGROUND
According to Chaudhary (2005), the term "knowledge" is often used interchangeably with other concepts such as intangible assets, capabilities, core competence, or skills. The term can refer to various things, including facts, instructions on how to carry out an activity, determination of when to use encyclopedic or procedural knowledge, or determination of the reason why. 
Adjei and Dei (2015) and Hey (2004) suggest that knowledge involves the accumulation and assimilation of multiple pieces of information, which are structured through relationships between the information and internalized or personalized by bringing it from the outside into the mind. Ramohlale (2014) defines knowledge as a fluid mix of framed experience, values, contextual information, and expert insight that provides a framework for evaluating and incorporating new experiences and information. Knowledge originates and is applied in the minds of knowers, and this understanding helps distinguish between the various types of knowledge, including tacit and explicit (Frost, 2012).
Ramohlale (2014) explains that the primary goal of Knowledge Management (KM) is to effectively structure, distribute, and consolidate knowledge to generate substance and value within the realm of knowledge management. This holistic approach to KM involves a comprehensive array of strategies, systems, and behavioral interventions aimed at facilitating the seamless circulation and exchange of business-relevant knowledge while minimizing redundant efforts (Arun, 2005). 
The process of KM includes retaining valuable talent, enhancing customer service, fostering innovation, expediting the accomplishment of business goals, and facilitating the creation of distinctive market offerings. While this is the case, Knowledge Management concept at Makerere University remains in theory and abstract with limited evidence of its appreciation and utilization in its day-to-day business.  
Makerere University is a renowned higher education institution in Africa that has a rich history of providing quality education to students. Established in 1922 as a technical school, Makerere University was upgraded to a University College affiliated with the University College of London in 1949 and in 1963, one of the three constituent colleges of the University of East Africa. In 1970, it attained independent national university status and began offering undergraduate and postgraduate courses (Historical Background, 2012).
Makerere University School of Public Health (MakSPH) is one of the leading public health education and research institutions in sub-Saharan Africa. The school provides training, community services, and research in the public health field. The roots of MakSPH can be traced back to the early 1950s when preventive medicine was introduced as an academic discipline in the faculty of medicine of the University of East Africa, which later transformed into Makerere University. The public health discipline evolved into a fully-fledged department of preventive medicine in 1957, with Professor George W. Gale heading the department (Mathers, 2013; Ngabirano, 1995).
The department of preventive medicine worked in conjunction with other departments in the medical school to fulfill its mandate of teaching, community service and research. One of the significant contributions of the department was the establishment of Kasangati, one of Africa's pioneering community health centers, in 1959. Kasangati health centre was supported by the Rockefeller Foundation and was instrumental in improving population health indicators, notably the infant mortality rate, which plummeted to 24/1000 live births, a figure comparable to those of developed countries at that time (Bennett et al., 1965; Mathers, 2013; Matysia, 2014). 
The Institute of Public Health (IPH) was conceived in 1967 with the idea of elevating the department of preventive medicine to an institute of public health. However, the assumption of political power by Idi Amin's regime led to the exodus of the remaining expatriates, and the idea of setting up the IPH was shelved almost indefinitely. Nevertheless, in 1975, under the leadership of Prof. Joseph Lutwama as the Dean of the medical faculty and Prof. Suleiman Jabir Farsey as head of the department of preventive medicine, the department was elevated to the Makerere Institute of Public Health. The institute became fully autonomous from the faculty of medicine in 2001 and was renamed Makerere University School of Public Health (MakSPH) in 2007 (Ngabirano, 1995).
The MakSPH building was constructed in the late 1960s through the financial support of the Rockefeller Foundation and the governments of Denmark and Norway. It was equipped with modern scientific equipment and designed to provide services for family planning and maternal and child health. The school started with four departments, namely Epidemiology and Biostatistics (EPIBIO), Health Policy Planning and Management (HPPM), Community Health and Behavioural Sciences (CHBS), and Disease Control and Environmental Health (DCEH) and was later renamed to Makerere University College of Health Sciences (MakCHS), a constituent college of Makerere University (Mak), in 2008 (MakSPH, 2021).























PROBLEM STATEMENT
Despite the importance of knowledge management for improving organizational performance and impact, there is a lack of empirical research on how knowledge management is perceived and practiced in different African contexts and organizations. Moreover, the Trauma, Injuries and Disability (TRIAD) Unit at Makerere’s School of Public Health (MakSPH) which is a research and training unit that focuses on addressing the burden of trauma, injuries, and disability in Uganda and beyond has and continues to generate a lot of evidence which is expected to influence policies and practice but there is limited evidence of this. An external analyses of knowledge management practices and translation has never been explored which if conducted could result guide strategies, to improve knowledge management practices.
Knowledge management is crucial for higher education institutions and institutes that engage in knowledge creation, dissemination, and learning, and since TRIAD aims to become a leading injury a Research Center, now awaiting consideration by the Makerere University College of Health Sciences Board in Africa and beyond, it needs to implement effective knowledge management practices to achieve its vision. The study aims to examine how TRIAD generates, acquires, captures, shares, and uses various types of knowledge to inform policy and practice in the field of trauma, injuries, and disability. The study will also identify the challenges and opportunities that TRIAD faces in terms of knowledge management, such as inadequate access to relevant and accurate information, lack of appreciation for indigenous knowledge, and weak institutions to support knowledge creation and dissemination. 











LITERATURE REVIEW
This chapter will examine the existing literature and summarise the current knowledge to elaborate more on Knowledge management practices at Trauma, Injuries and Disability Unit at Makerere’s School of Public Health.
According to Brown and Duguid (2001), tacit knowledge, also known as know-how, intuitive, practical, or action-oriented knowledge, is based on practice and acquired through personal experience. It is seldom expressed openly, often resembles intuitions, and embodies beliefs and values. Tacit knowledge can be shared through socialization and interaction between persons or groups in organizations. When tacit knowledge is articulated, it becomes explicit knowledge (Smith, 2012). Explicit knowledge, also known as codified, know-what, or academic knowledge, is the knowledge that has been processed by information systems, written down, codified or recorded, archived, and protected by organizations (Yeh, 2011).
Management involves a range of activities related to the recognition, dissemination, and generation of knowledge. This necessitates the establishment of mechanisms for building and upkeeping knowledge databases, as well as fostering and enabling the exchange of knowledge and organizational learning. Successful organizations in the field of Knowledge Management are inclined to regard knowledge as a valuable resource and to establish cultural norms and principles within the organization that promote the generation and sharing of knowledge. Metaxiotis and Psarras (2003) note that there has been a growing interest in Knowledge Management (KM) in the communication field, with industry, enterprises, and academia recognizing its significance. As we enter the age of "knowledge capitalism," combining KM with information management will be essential for organizations to transform individual knowledge into organizational knowledge. Since Higher Education (HE) institutions engage in knowledge creation, dissemination, and learning, they are also involved in the knowledge business. Given the increasing economic importance of knowledge, which has redefined the links among education, work, and learning, KM has a critical role to play in HE.
Interest in knowledge management began in the mid-1990s, with a significant increase in academic publications and business organizations attempting to implement knowledge management systems. Despite initial predictions of a decline in interest, sustained interest in the topic has continued into the twenty-first century, as seen in the emergence of conferences and journals focused on learning and knowledge management. At least twenty peer-reviewed academic journals exist in this field (Serenko et al. 2010).
Knowledge management was initially defined as a systematic approach to the capture, structuring, management, and dissemination of knowledge throughout an organization to work faster, reuse best practices, and reduce costly rework from project to project. Knowledge management solutions have proven most successful in the capture, storage, and subsequent dissemination of knowledge that has been rendered explicit, particularly lessons learned and best practices (Nonaka et al., 2000; Pasternack et al., 1998; Pfeffer & Sutton, 1999; Ruggles & Holtshouse, 1999).
Ruggles and Holtshouse (1999) identified key attributes of knowledge management, including generating new knowledge, accessing valuable knowledge from outside sources, using accessible knowledge in decision making, and measuring the value of knowledge assets and/or the impact of knowledge management. Recurring key attributes of knowledge management include addressing both tacit and explicit knowledge forms, added-value, and the application or use of knowledge.

OBJECTIVES
1.	To describe the current knowledge management practices at the Trauma, Injuries and disability unity at Makerere’s school of public health 
2.	To identify the challenges with the current knowledge management practices at Trauma, Injuries and disability unity at Makerere’s school of public health 
3.	To establish strategies for improving knowledge management at Trauma, Injuries and disability unity at Makerere’s school of public health
RESEARCH QUESTIONS:
1.	What are the current knowledge management and communication practices at the Trauma, Injuries and Disability Unit at Makerere’s School of Public Health?
2.	What are the challenges faced by the Trauma, Injuries and Disability Unit in implementing knowledge management and communication practices at Makerere’s School of Public Health?
3.	How can knowledge management and communication practices be improved at the Trauma, Injuries and Disability Unit at Makerere’s School of Public Health?








THEORETICAL FRAMEWORK
In order to achieve the objectives of this study and a comprehensive framework for understanding knowledge management practices at the Trauma, Injuries and Disability Unit at Makerere’s School of Public Health, and help identify strategies for improving these practices, this study will deploy the Nonaka Takeuchi Knowledge Spiral Model, the Community of Practice Theory.
Community of practice theory
In 1991 theorists Jean Lave and Etienne Wenger discussed the notion of legitimate peripheral participation and coined the Community of practice (COPs), a group of individuals who share a common interest or profession and engage in regular interactions to share knowledge, experiences, and best practices. This theory served as the basis of a social theory of learning and KM (Wenger, 1999). For Wenger (2000, 2002), CoPs are the basic building blocks of social learning systems because they are the social ‘containers’ of the competencies that make up such a system. Communities of practice can be cultivated and managed to support knowledge management initiatives in organizations. This theory will be used to emphasize the importance of social learning and collaboration in knowledge management. Communities of practice are defined as groups of people who are passionate about the same subject, craft, or line of work (Wenger 1998, 2006). Through frequent engagement with one another, these people expand their knowledge and expertise (Wenger 2006; Wenger et al. 2002). Consequently, a community of practice serves as a "living curriculum" that involves members in a process of "collective learning" (Wenger 2006). CoP theory will provide a framework and insights into how knowledge is shared, communicated, and utilized within communities of practice. It will help examine the dynamics of knowledge exchange, the role of social relationships, and the impact of shared practices and experiences on knowledge creation and transfer.
The Nonaka Takeuchi Knowledge Spiral Model
Nonaka and Takeuk theorized that the creation of knowledge is the result of a continuous cycle of four integrated processes: externalization, internalization, combination, and socialization. The needs of context and order modify how these four knowledge conversion mechanisms interact and complement one another:
 
Among the various theories, concepts, and tools related to knowledge management, the SECI model holds significant recognition as a theoretical milestone and is commonly utilized as a framework for conceptualizing and describing knowledge management in case studies. The model (Nonaka, 1994; Nonaka and Takeuchi, 1995) believes the creation of knowledge is a dynamic process where new information is produced and amplified across several ontological levels (individual, organizational, and inter-organizational) through a constant dialog between tacit and explicit knowledge. The model stands out because it provides a useful instrument for evaluating knowledge generation in organizational contexts in alongside formalizing a theory of knowledge creation based on the epistemological distinction between tacit and explicit knowledge. According to Nonaka (1994), the creation of knowledge is a continuous, dynamic process that emerges and recurs across time. The generation-codification-transfer-application process (Davenport and Prusak, 1998; Ford, 2004), the four processes of knowledge creation, retrieval, transfer, and application (Alavi and Leidner, 2001), and the accumulation of dynamic competence development (Zollo and Winter, 2002) are just a few examples of knowledge management process conceptualizations that differ from the SECI root metaphor, the spiral. In line with the widely accepted conceptualization of knowledge management as a path leading from acquiring, storing, and diffusing knowledge to applying it, these models suggest a sequential evolution of knowledge, which has the same quality but a different "stage of life" and usefulness to organizational life. The SECI model, on the other hand, focuses on holistic processes that transform knowledge from one kind to another to produce a new grade of knowledge. Rather than stressing the role that each step of the knowledge lifecycle plays for organizational life; this view emphasizes the underlying processes that generate knowledge. It is based on Polanyi's (1967) division of tacit and explicit knowledge, which he compared to an iceberg metaphorically. The explicit knowledge, or the knowledge we are aware of and capable of codifying and transmitting through formal language, is linked to the portion of the iceberg that is above the ocean. Institutional communications, such as newsletters, practices based on formal meetings, such as conferences or refresher courses, or knowledge products, such as websites, databases, manuals, or patents, are examples of explicit knowledge in organizations. However, implicit knowledge underpins explicit information, which was developed via experience connected to professional practice and integrated into the particular work setting. This knowledge is rooted in routines and habits, is contextual, and is analogic (Warnier, 1999).
RESEARCH METHODOLOGY
The study will employ a qualitative case study design conducted at Makerere University School of Public Health, specifically at sites in Mulago, Kololo in Kampala, and Kasangati in Wakiso District. Purposive and snowball sampling methods will be utilized to select a sample size of 20 participants. Data collection will involve conducting Key Informant Interviews, In-depth Interviews, and Focus Group Discussions.  According to Yin (2018), a case study design is useful when the research aims to investigate a contemporary phenomenon within its real-life context. The case study design will enable me to examine the knowledge management practices at the unit and their effectiveness in achieving the desired outcomes.
It has been used in several studies related to knowledge management practices in various contexts. For example, Singh and Kant (2018) used a case study design to examine the knowledge management practices in Indian organizations. Similarly, Marouf et al. (2020) employed a case study design to explore the knowledge management practices in the UAE construction industry.
In this study, the case of the Trauma, Injuries and Disability Unit at Makerere’s School of Public Health will be studied in detail to explore the current knowledge management and communication practices, identify the challenges, and establish strategies for improvement. 
Being a qualitative study, we hope to conduct individual interviews of key staff and stakeholders at TRIAD including all genders and conduct a document review.  
I intend to use the questionnaire tool (consisting of both closed-ended and open-ended questions) to collect primary data directly from respondents. Structured interviews will also be used to collect qualitative data from the Head of the Unit, the Head of Department under which the unit falls as well as the head of MakSPH. This study will be guided by Makerere University policy on research ethics.
Contribution to communication
This study has important implications for communication and collaboration within the health sector. The findings from this study can be used to inform communication strategies and practices within the Trauma, Injuries, and Disability Unit at Makerere’s School of Public Health. Effective knowledge management and communication practices can lead to better communication and collaboration among employees, stakeholders, which can ultimately lead to better health outcomes for citizens in terms of policy formulation and evidence-based decision making.

























References
1.	Adjei, K. O. K., & Dei, D. G. J. (2015). Assessing implementation of knowledge management systems in banks, a case of Ghana. Journal of Information and Knowledge Management, 5(1), 133-139. 
2.	Angela Matysia (2014). Health and Well-being. Science, Medical Education, and Public Health. The Rockefeller Foundation Centennial Series. Accessed at https://www.rockefellerfoundation.org/wp-content/uploads/Health-Well-being.pdf on May 10 2023. 
3.	Alavi, M., & Leidner, D. E. (2001). Review: Knowledge management and knowledge management systems: Conceptual foundations and research issues. MIS Quarterly, 25(1), 107-136. https://www.jstor.org/stable/3250961
4.	Arun, H. (2005). 360-degree knowledge management. Journal of Knowledge Management Practice.
5.	BENNETT, J.F., et al., The Role of a Rural Health Center in the Teaching Program of a Medical School in East Africa. Academic Medicine, 1965. 40(7): p. 690-699.
6.	Brown, J. S., & Duguid, P. (2001). Knowledge and organization: A social-practice perspective. Organization Science, 12, 40-57.
7.	Chaudhary, H. C. (2005). Knowledge Management For 1 Competitive Advantage. Excel Books India.
8.	Daft, R. L., & Lengel, R. H. (1986). Organizational information requirements, media richness and structural design. Management Science, 32(5), 554-571.
9.	Davenport, T. H., & Prusak, L. (1998). Working knowledge: How organizations manage what they know. Harvard Business Press.
10.	Davidson B (2017) Storytelling and evidence-based policy: lessons from the grey literature. Pal Commun 3:201793 
11.	Estrada F C R, David L S (2015) Improving visual communication of science through the incorporation of graphic design theories and practices into science communication. Sci Commun 37(I):140–148
12.	Halton, C. (2023, June 17). Diffusion of Innovations Theory: Definition and Examples. Investopedia. https://www.investopedia.com/terms/d/diffusion-of-innovations-theory.asp
13.	Historical Background. (2012, November 19). Makerere University. https://www.mak.ac.ug/about-makerere/historical-background 
14.	Jones M, Crow D (2017) How can we use the ‘science of stories’ to produce persuasive scientific stories? Pal Commun 3:53 https://doi.org/10.1057/s41599-017-0047-7 
15.	Kathryn Mathers (2013). Shared journey. The Rockefeller foundation, human capital, and development in Africa. Rockefeller Foundation Centennial Series. Accessed at https://www.rockefellerfoundation.org/wp-content/uploads/Shared-Journey-PDF.pdf on April 26 2023. 
16.	Lave, J., & Wenger, E. (1991). Situated learning. Legitimate peripheral participation. Cambridge: University of Cambridge Press.
17.	MakSPH (2020). Strategic Plan 2020–2030. Makerere University School of Public Health.
18.	Marouf, L., Al-Tarawneh, H., Alomari, A., & Al-Sarayreh, K. (2020). Knowledge management practices in the UAE construction industry: A case study. Journal of Engineering, Design, and Technology, 18(6), 1308-1323. doi: 10.1108/JEDT-02-2020-0043
19.	McCombs, M. E., & Shaw, D. L. (1972). The agenda-setting function of mass media. Public opinion quarterly, 36(2), 176-187.
20.	Metaxiotis, K., & Psarras, J. (2003, December). Applying Knowledge Management in Higher Education: The Creation of a Learning Organisation. Journal of Information & Knowledge Management, 02(04), 353–359. https://doi.org/10.1142/s0219649203000541
21.	Nawaz, N., Durst, S., Hariharasudan, A., & Shamugia, Z. (2020, December). Knowledge Management Practices in Higher Education Institutions - A Comparative Study. Polish Journal of Management Studies, 22(2), 291–308. https://doi.org/10.17512/pjms.2020.22.2.20 
22.	Ngabirano S. Francis S (1995). The Institute of Public Health Through Idi Amin’s Rule. Unpublished 
23.	Nonaka, I., Toyama, R., & Byosiere, P. (2000). A theory of organizational knowledge creation. International Journal of Technology Management, 20(5-6), 379-399.
24.	Obi, C., & Ugochukwu, A. (2019). Knowledge Management in Contemporary Africa: Challenges, Trends, and Prospects. Journal of African Studies and Development, 11(7), 104-120.
25.	Pasternack, B. A., & Viscio, A. J. (1998). The centerless corporation: A new model for transforming your organization for growth and prosperity. John Wiley & Sons.
26.	Pfeffer, J., & Sutton, R. I. (1999). Knowing “what” to do is not enough: Turning knowledge into action. California Management Review, 42(1), 83-108.
27.	Ramohlale, M. P. (2014). Knowledge management practices at the Department of Defence in South Africa (Doctoral dissertation, University of South Africa).
28.	Rogers, E. M. (1960). Diffusion of innovations. New York: Free Press.
29.	Ruggles, R., & Holtshouse, D. (1999). The knowledge advantage: Creating and sustaining superior performance. Butterworth-Heinemann.
30.	Ruggles, R., & Holtshouse, D. (1999). The knowledge advantage: Unlocking the secrets of the world's leading knowledge organizations. Capstone Publishing Ltd.
31.	Sangmeister, H. (1983, December). International Bank for Reconstruction and Development/The World Bank: World development report 1982. Statistische Hefte, 24(1), 161–166. https://doi.org/10.1007/bf02932499
32.	Schunk, D. H. (2012). Social cognitive theory.
33.	Singh, M., & Kant, R. (2018). Knowledge management practices in Indian organizations: A case study. Journal of Advances in Management Research, 15(2), 164-182. doi: 10.1108/JAMR-11-2016-0096
34.	Wenger, E. C., & Snyder, W. M. (2000). Communities of practice: The organizational frontier. Harvard business review, 78(1), 139-146.
35.	Wenger, E. (1999). Communities of practice: Learning, meaning, and identity. Cambridge university press.
36.	Wenger, E. (1998). Communities of practice: Learning, meaning and identity. New York: Cambridge University Press.
37.	Wenger, E. (2004). Learning for a small planet: A research agenda. www.ewenger.com/research/index.htm. Accessed 23 May 2012.
38.	Wenger, E. (2006). Communities of practice: A brief introduction. Retrieved from http://www.ewenger.com/theory/ Accessed 2 Dec 2010.
39.	Black, L. D. (2006). Corporate social responsibility as capability: The case of BHP Billiton. Journal of Corporate Citizenship, 23(Autumn), 25–38.
40.	Conklin, E. J. (1997). Designing organizational memory: Preserving intellectual assets in a knowledge economy. Retrieved 23 May 2012, from http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.2.8218&rep=rep1&type=pdf.
41.	Hedberg, B. (1981). How organizations learn and unlearn. In P. C. Nystrom & W. H. Starbuck (Eds.), Handbook of organizational design (pp. 3–27). New York: Oxford.
42.	Hislop, D. (2004). The paradox of communities of practice: Knowledge sharing between communities. In P. Hildreth & C. Kimble (Eds.), Knowledge networks: Innovation through communities of practice (Vol. 36–46, pp. 36–46). Hershey: Idea Group.
43.	Kimble, C., & Hildreth, P. (2004). Communities of practice: Going one step too far? In Paper presented at the 9e colloque de l'AIM, France, http://halshs.archives-ouvertes.fr/docs/00/48/96/32/PDF/Kimble_2004.pdf. Accessed 3 Jan 2011.
44.	Lave, J., & Wenger, E. (1991). Situated learning. Legitimate peripheral participation. Cambridge: University of Cambridge Press.
45.	Lesser, E. L., & Storck, J. (2001). Communities of practice and organizational performance. IBM Systems Journal, 40(4). Retrieved 23 May 2012, from http://www.research.ibm.com/journal/sj/404/lesser.html
46.	McDermott, R., & Archibald, D. (2010). Harnessing your staff's informal networks. Harvard Business Review, 88(3), 82–89.
47.	Seely Brown, J., & Gray, S. E. (1995). The people are the company. Fast Company Retrieved 23 May 2012, from http://www.fastcompany.com/online/01/people.html
48.	Senge, P. M. (1990). The fifth discipline: The art and practice of a learning organization. New York: Currency Doubleday.
49.	Vaast, E. (2004). The use of intranets: The missing link between communities of practice and networks of practice? In P. Hildreth & C. Kimble (Eds.), Knowledge networks: Innovation through communities of practice (pp. 216–228). Hershey: Idea Group.
50.	Wenger, E. (1998). Communities of practice: Learning, meaning and identity. New York: Cambridge University Press.
51.	Wenger, E. (2004). Learning for a small planet: A research agenda. www.ewenger.com/research/index.htm. Accessed 23 May 2012.
52.	Wenger, E. (2006). Communities of practice: A brief introduction. Retrieved from http://www.ewenger.com/theory/ Accessed 2 Dec 2010.
53.	Wenger, E., Mcdermott, R., & Snyder, W. (2002). A guide to managing knowledge: Cultivating communities of practice. Boston, MA: Harvard Business School.
54.	Wilcox C (2012) It's time to e-volve: taking responsibility for science communication in a digital age. In: Biological Bulletin, Guest Editorial. Vol. 222, No 2, The University of Chicago Press Journals 
55.	Williamson, O. E. (1983). Credible commitments: Using hostages to support exchange. The American Economic Review, 73(4), 519-540.
56.	Yin, R. K. (2018). Case study research and applications: Design and methods. Sage publications.
57.	Warnier, J. P. (1999). Construire la Culture Matérielle: l’Homme qui Pensait Avec ses Doigts. Paris: Presses universitaires de France, 176.
58.	Nonaka, I. (1994). A dynamic theory of organizational knowledge creation. Organ. Sci. 5, 14–37. doi: 10.1093/fampra/cmw098
59.	Nonaka, I., and Takeuchi, K. (1995). The Knowledge Creating Company. New York, NY: Oxford University Press.
60.	Warnier, J. P. (1999). Construire la Culture Matérielle: l’Homme qui Pensait Avec ses Doigts. Paris: Presses universitaires de France, 176.
61.	Polanyi, M. (1967). The Tacit Dimension. New York, NY: Anchor Books.
62.	Zollo, M., and Winter, S. (2002). Deliberate learning and the evolution of dynamic capabilities. Organ. Sci. 13, 339–351. doi: 10.1287/orsc.13.3.339.2780
63.	Ford, D. (2004). Trust and Knowledge Management: The Seeds of Success. In Handbook on Knowledge Management. Berlin: Springer, 553-575.
64.	Davenport, T. H., and Prusak, L. (1998). Working Knowledge: How Organizations Manage What They Know. Brighton, MA: Harvard Business Press.
" 
   
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
