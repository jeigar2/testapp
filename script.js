// Definir las preguntas y respuestas
// Definir las preguntas y respuestas
var questions = [
    {// Question #1
        number: 1,
        question: `A company is planning to run a global marketing application in the AWS Cloud. The application will feature videos that can be viewed by users. The company must ensure that all users can view these videos with low latency.
    Which AWS service should the company use to meet this requirement?`,
        options: [
            "AWS Auto Scaling",
            "Amazon Kinesis Video Streams",
            "Elastic Load Balancing",
            "Amazon CloudFront"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  5 months, 4 weeks ago
        explanation: "D.- he best option for the company to ensure that users can view videos with low latency would be to use Amazon CloudFront. CloudFront is a content delivery network (CDN) that speeds up the delivery of static and dynamic web content, such as HTML, CSS, JavaScript, and images, as well as videos."
    },
    {// Question #2
        number: 2,
        question: "Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?",
        options: [
            "Security",
            "Reliability",
            "Performance efficiency",
            "Cost optimization"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (97%)

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "B.- . Reliability"
    },
    {// Question #3
        number: 3,
        question: "Which of the following are benefits of migrating to the AWS Cloud? (Choose two.)",
        options: [
            "Operational resilience",
            "Discounts for products on Amazon.com",
            "Business agility",
            "Business excellence",
            "Increased staff retention"
        ],
        correctAnswers: [0, 2],
        //Community vote distribution
        //AC (94%)	3%

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "A.- Ref: https://"
    },
    {// Question #4
        number: 4,
        question: `A company is planning to replace its physical on-premises compute servers with AWS serverless compute services. The company wants to be able to take advantage of advanced technologies quickly after the migration.
    Which pillar of the AWS Well-Architected Framework does this plan represent?`,
        options: [
            "Security",
            "Performance efficiency",
            "Operational excellence",
            "Reliability"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (79%)	C (21%)

        //   Highly Voted  7 months ago
        explanation: "B.- erformance efficiency: The performance efficiency pillar focuses on the efficient use of computing resources to meet requirements, and how to maintain efficiency as demand changes and technologies evolve."
    },
    {// Question #5
        number: 5,
        question: `A large company has multiple departments. Each department has its own AWS account. Each department has purchased Amazon EC2 Reserved Instances.
    Some departments do not use all the Reserved Instances that they purchased, and other departments need more Reserved Instances than they purchased.
    The company needs to manage the AWS accounts for all the departments so that the departments can share the Reserved Instances. Which AWS service or tool should the company use to meet these requirements?`,
        options: [
            "AWS Systems Manager",
            "Cost Explorer",
            "AWS Trusted Advisor",
            "AWS Organizations"
        ],
        correctAnswers: [1],
        explanation: "Reference: https://aws.amazon.com/ru/organizations/"
        //Community vote distribution
        //D (94%)	3%

        //   Highly Voted  8 months ago
    },
    {// Question #6
        number: 6,
        question: "Which component of the AWS global infrastructure is made up of one or more discrete data centers that have redundant power, networking, and connectivity?",
        options: [
            "AWS Region",
            "Availability Zone",
            "Edge location",
            "AWS Outposts"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (94%)	6%

        //  3 days, 1 hour ago
        explanation: "B. Availability Zone"
        //upvoted 1 times
    },
    {// Question #7
        number: 7,
        question: "Which duties are the responsibility of a company that is using AWS Lambda? (Choose two.)",
        options: [
            "Security inside of code",
            "Selection of CPU resources",
            "Patching of operating system",
            "Writing and updating of code",
            "Security of underlying infrastructure"
        ],
        correctAnswers: [0, 3],
        //Community vote distribution
        //AD (91%)	9%

        //   Highly Voted  9 months, 1 week ago
        explanation: "A.- Lambda runs your code on high availability compute infrastructure and performs all the administration of your compute resources. This includes server and operating system maintenance, capacity provisioning and automatic scaling, code and security patch deployment, and code monitoring and logging. All you need to do is supply the code. Ref:https://aws.amazon.com/lambda/features/"
    },
    {// Question #8
        number: 8,
        question: "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
        options: [
            "2 Reserved Instances",
            "EC2 Amazon Machine Images (AMIs)",
            "Amazon Elastic Block Store (Amazon EBS) snapshots",
            "AWS Shield",
            "Amazon GuardDuty"
        ],
        correctAnswers: [1, 2],
        //Community vote distribution
        //BC (100%)

        //   Highly Voted  9 months, 1 week ago
        explanation: `https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
    You can back up Amazon EC2 instances used by your workload as Amazon Machine Images (AMIs). The AMI is created from snapshots of your instance's root volume and any other EBS volumes attached to your instance. You can use this AMI to launch a restored version of the EC2 instance`
    },
    {// Question #9
        number: 9,
        question: "A company is migrating to the AWS Cloud instead of running its infrastructure on premises. Which of the following are advantages of this migration? (Choose two.)",
        options: [
            "Elimination of the need to perform security auditing",
            "Increased global reach and agility",
            "Ability to deploy globally in minutes",
            "Elimination of the cost of IT staff members",
            "Redundancy by default for all compute services"
        ],
        correctAnswers: [1, 3],
        //Community vote distribution
        //BC (89%)	9%

        //   Highly Voted  6 months, 1 week ago
        explanation: `The six advantages of cloud computing are:
    Trade upfront expense for variable expense.`
    },
    {// Question #10
        number: 10,
        question: `A user is comparing purchase options for an application that runs on Amazon EC2 and Amazon RDS. The application cannot sustain any interruption. The application experiences a predictable amount of usage, including some seasonal spikes that last only a few weeks at a time. It is not possible to modify the application.
    Which purchase option meets these requirements MOST cost-effectively?`,
        options: [
            "Review the AWS Marketplace and buy Partial Upfront Reserved Instances to cover the predicted and seasonal load.",
            "Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run on Spot Instances.",
            "Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run at an On-Demand rate.",
            "Buy Reserved Instances to cover all potential usage that results from the seasonal usage."
        ],
        correctAnswers: [1],
        //Community vote distribution
        //C (97%)

        //   Highly Voted  8 months, 3 weeks ago
        explanation: `C.- ho's providing the "correct" answer here? Answers should all be reviewed, you're confusing the examinees. C should be the answer.`
    },
    {// Question #11
        number: 11,
        question: "A company wants to review its monthly costs of using Amazon EC2 and Amazon RDS for the past year. Which AWS service or tool provides this information?",
        options: [
            "AWS Trusted Advisor",
            "Cost Explorer",
            "Amazon Forecast",
            "Amazon CloudWatch"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: `After you enable Cost Explorer, AWS prepares the data about your costs for the current month and the last 12 months, and then calculates the forecast for the next 12 months. The current month's data is available for viewing in about 24 hours. The rest of your data takes a few days longer. Cost Explorer updates your cost data at least once every 24 hours.`
        //upvoted 21 times
    },
    {// Question #12
        number: 12,
        question: `A company wants to migrate a critical application to AWS. The application has a short runtime. The application is invoked by changes in data or by shifts in system state. The company needs a compute solution that maximizes operational efficiency and minimizes the cost of running the application.
    Which AWS solution should the company use to meet these requirements?`,
        options: [
            "Amazon EC2 On-Demand Instances",
            "AWS Lambda",
            "Amazon EC2 Reserved Instances",
            "Amazon EC2 Spot Instances"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  7 months, 3 weeks ago
        explanation: "B.- rom: https://aws.amazon.com/lambda/"
    },
    {// Question #13
        number: 13,
        question: "Which AWS service or feature allows users to connect with and deploy AWS services programmatically?",
        options: [
            "AWS Management Console",
            "AWS Cloud9",
            "AWS CodePipeline",
            "AWS software development kits (SDKs)"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (86%)	14%

        //   Highly Voted  6 months ago
        explanation: `Elimination Approach... ;)
    AWS Management Console --> not possible
    AWS Cloud9 --> use IDE`
    },
    {// Question #14
        number: 14,
        question: "A company plans to create a data lake that uses Amazon S3. Which factor will have the MOST effect on cost?",
        options: [
            "The selection of S3 storage tiers",
            "Charges to transfer existing data into Amazon S3",
            "The addition of S3 bucket policies",
            "S3 ingest fees for each request"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (97%)

        //   Highly Voted  7 months, 1 week ago
        explanation: "A.-  dont know why some people are considering Charges to Transfer existing Data into Amazon S3 if AWS charges nothing to Data transferred IN from Internet."
        //See Prices calculations of AWS S3 on https://aws.amazon.com/s3/pricing/
    },
    {// Question #15
        number: 15,
        question: `A company is launching an ecommerce application that must always be available. The application will run on Amazon EC2 instances continuously for the next
    12 months.
    What is the MOST cost-effective instance purchasing option that meets these requirements?`,
        options: [
            "Spot Instances",
            "Savings Plans",
            "Dedicated Hosts",
            "On-Demand Instances"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  9 months, 1 week ago
        explanation: "B.- "
    },
    {// Question #16"
        number: 16,
        question: "Which AWS service or feature can a company use to determine which business unit is using specific AWS resources?",
        options: [
            "Cost allocation tags",
            "Key pairs",
            "Amazon Inspector",
            "AWS Trusted Advisor"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  5 months, 2 weeks ago
        explanation: "A.- ost allocation tags https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html"
        //upvoted 5 times
    },
    {// Question #17
        number: 17,
        question: "A company wants to migrate its workloads to AWS, but it lacks expertise in AWS Cloud computing. Which AWS service or feature will help the company with its migration?",
        options: [
            "AWS Trusted Advisor",
            "AWS Consulting Partners",
            "AWS Artifacts",
            "AWS Managed Services"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //B (64%)	 	D (35%)

        //   Highly Voted  9 months, 1 week ago
        explanation: "Answer is D: Consulting Partners is not a AWS service, it is a collaboration of third parties"
        //upvoted 41 times
    },
    {// Question #18
        number: 18,
        question: "Which AWS service or tool should a company use to centrally request and track service limit increases?",
        options: [
            "AWS Config",
            "Service Quotas",
            "AWS Service Catalog",
            "AWS Budgets"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (97%)

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "B.- ttps://aws.amazon.com/about-aws/whats-new/2021/04/service-quotas-available-aws-govcloud-us-regions/"
        //upvoted 10 times
    },
    {// Question #19
        number: 19,
        question: "Which documentation does AWS Artifact provide?",
        options: [
            "Amazon EC2 terms and conditions",
            "AWS ISO certifications",
            "A history of a company's AWS spending",
            "A list of previous-generation Amazon EC2 instance types"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (91%)	9%

        //   Highly Voted  9 months, 1 week ago
        explanation: `According to AWS:
    What is an AWS artifact?
    AWS Artifact is a web service that enables you to download AWS security and compliance documents such as ISO certifications and SOC reports. User Guide. Describes key concepts of AWS Artifact and provides instructions for using the features of AWS Artifact.`
    },
    {// Question #20
        number: 20,
        question: "Which task requires using AWS account root user credentials?",
        options: [
            "Viewing billing information",
            "Changing the AWS Support plan",
            "Starting and stopping Amazon EC2 instances",
            "Opening an AWS Support case"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (81%)	A (19%)

        //   Highly Voted  7 months, 3 weeks ago
        explanation: "B.- ote for B"
        //https://aws.amazon.com/premium},support/knowledge-center/change-support-plan/?nc1=h_ls
    },
    {// Question #21
        number: 21,
        question: `A company needs to simultaneously process hundreds of requests from different users.
    Which combination of AWS services should the company use to build an operationally efficient solut"ion`,
        options: [
            "Amazon Simple Queue Service (Amazon SQS) and AWS Lambda",
            "AWS Data Pipeline and Amazon EC2",
            "Amazon Kinesis and Amazon Athena",
            "AWS Amplify and AWS AppSync"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //A (97%)

        ////   Highly Voted  9 months, 2 weeks ago Why there're so much controversial questions upvoted 40 times
        //   Highly Voted  9 months, 2 weeks ago
        explanation: "A.- "
    },
    {// Question #22"
        number: 22,
        question: "What is the scope of a VPC within the AWS network?",
        options: [
            "A VPC can span all Availability Zones globally.",
            "A VPC must span at least two subnets in each AWS Region.",
            "A VPC must span at least two edge locations in each AWS Region.",
            "A VPC can span all Availability Zones within an AWS Region."
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (93%)	7%

        //   Highly Voted  9 months, 2 weeks ago
        //Correct answer D
        explanation: `A VPC is a logically isolated piece of AWS cloud dedicated to your company. This means, you can run applications on overly provisioned, highly available, and redundant infrastructure setup and it is managed by AWS. All the complexity of setting up a data center with cables, server racks, hardware, power supply, etc. all are managed by AWS.
    A VPC belongs to a region.`
    },
    {// Question #23
        number: 23,
        question: "Which of the following are components of an AWS Site-to-Site VPN connection? (Choose two.)",
        options: [
            "AWS Storage Gateway",
            "Virtual private gateway",
            "NAT gateway",
            "Customer gateway",
            "Internet gateway"
        ],
        correctAnswers: [1, 3],
        //Community vote distribution
        //BD (100%)

        //   Highly Voted  9 months, 1 week ago
        explanation: "B.- The VPC has an attached virtual private gateway, and your on-premises (remote) network includes a customer gateway device, which you must configure to enable the Site-to-Site VPN connection. You set up the routing so that any traffic from the VPC bound for your network is routed to the virtual private gateway."
    },
    {// Question #24
        number: 24,
        question: `A company needs to establish a connection between two VPCs. The VPCs are located in two different AWS Regions. The company wants to use the existing infrastructure of the VPCs for this connection.
    Which AWS service or feature can be used to establish this connection?`,
        options: [
            "AWS Client VPN",
            "VPC peering",
            "AWS Direct Connect",
            "VPC endpoints"
        ],
        correctAnswers: [1],
        explanation: "Reference: https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html"
        //Community vote distribution
        //B (93%)	4%

        //   Highly Voted  6 months, 1 week ago
    },
    {// Question #25
        number: 25,
        question: "According to the AWS shared responsibility model, what responsibility does a customer have when using Amazon RDS to host a database?",
        options: [
            "Manage connections to the database",
            "Install Microsoft SQL Server",
            "Design encryption-at-rest strategies",
            "Apply minor database patches"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (69%)	 	C (29%)

        //   Highly Voted  8 months ago
        explanation: "A.- ot C because: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html"
        //upvoted 24 times
    },
    {// Question #26
        number: 26,
        question: "What are some advantages of using Amazon EC2 instances to host applications in the AWS Cloud instead of on premises? (Choose two.)",
        options: [
            "EC2 includes operating system patch management.",
            "EC2 integrates with Amazon VPC, AWS CloudTrail, and AWS Identity and Access Management (IAM).",
            "EC2 has a 100% service level agreement (SLA).",
            "EC2 has a flexible, pay-as-you-go pricing model.",
            "EC2 has automatic storage cost optimization."
        ],
        correctAnswers: [2, 4],
        //Community vote distribution
        //BD (84%)	Other

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "I think it should be B and D. Based on https://"
        //upvoted 26 times
    },
    {// Question #27
        number: 27,
        question: "A user needs to determine whether an Amazon EC2 instance's security groups were modified in the last month. How can the user see if a change was made?",
        options: [
            "Use Amazon EC2 to see if the security group was changed.",
            "Use AWS Identity and Access Management (IAM) to see which user or role changed the security group.",
            "Use AWS CloudTrail to see if the security group was changed.",
            "Use Amazon CloudWatch to see if the security group was changed."
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (97%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "C.- loudTrail is the correct answer:https://aws.amazon.com/cloudtrail/features/"
    },
    {// Question #28
        number: 28,
        question: "Which AWS service will help protect applications running on AWS from DDoS attacks?",
        options: [
            "Amazon GuardDuty",
            "AWS WAF",
            "AWS Shield",
            "Amazon Inspector"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (94%)	6%

        //   Highly Voted  7 months ago
        explanation: `C.- hield is the answer to DDoS
    if you see DDoS, choose shield`
    },
    {// Question #29
        number: 29,
        question: "Which AWS service or feature acts as a firewall for Amazon EC2 instances?",
        options: [
            "Network ACL",
            "Elastic network interface",
            "Amazon VPC",
            "Security group"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  7 months ago
        explanation: "D.- ecurity group - at instance level NACL - subnet level"
        //upvoted 16 times
    },
    {// Question #30
        number: 30,
        question: "How does the AWS Cloud pricing model differ from the traditional on-premises storage pricing model?",
        options: [
            "AWS resources do not incur costs",
            "There are no infrastructure operating costs",
            "There are no upfront cost commitments",
            "There are no software licensing costs"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //C (54%)	 	B (45%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "B.-  believe B is correct, because in AWS you pay for stroage, compute, etc. You don't pay for infra ops directly. On the other hand you can make commitments with saving plans or reserved instances."
        //upvoted 38 times
    },
    {// Question #31
        number: 31,
        question: "A company has a single Amazon EC2 instance. The company wants to adopt a highly available architecture. What can the company do to meet this requirement?",
        options: [
            "Scale vertically to a larger EC2 instance size.",
            "Scale horizontally across multiple Availability Zones.",
            "Purchase an EC2 Dedicated Instance.",
            "Change the EC2 instance family to a compute optimized instance."
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  1 day, 17 hours ago
        explanation: "B.- . Scale horizontally across multiple Availability Zones."
        //upvoted 1 times
    },

    {// Question #32
        number: 32,
        question: `A company's on-premises application deployment cycle was 3-4 weeks. After migrating to the AWS Cloud, the company can deploy the application in 2-3 days.
    Which benefit has this company experienced by moving to the AWS Cloud?`,
        options: [
            "Elasticity",
            "Flexibility",
            "Agility",
            "Resilience"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //C (98%)

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "I'm pretty sure it should be Agility"
        //upvoted 44 times
    },
    {// Question #33
        number: 33,
        question: "Which of the following are included in AWS Enterprise Support? (Choose two.)",
        options: [
            "AWS technical account manager (TAM)",
            "AWS partner-led support",
            "AWS Professional Services",
            "Support of third-party software integration to AWS",
            "5-minute response time for critical issues"
        ],
        correctAnswers: [0, 3],
        //Community vote distribution
        //AD (76%)	AE (16%)   8%

        //   Highly Voted  4 months, 2 weeks ago
        explanation: "i[s A&D, hope this picture summary helps --> https://i.ytimg.com/vi/0LQcq_zyNmg/maxresdefault.jpg]"
        //upvoted 22 times
    },
    {// Question #34
        number: 34,
        question: `A global media company uses AWS Organizations to manage multiple AWS accounts.
    Which AWS service or feature can the company use to limit the access to AWS services for mem"ber accounts`,
        options: [
            "AWS Identity and Access Management (IAM)",
            "Service control policies (SCPs)",
            "Organizational units (OUs)",
            "Access control lists (ACLs)"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //B (85%)	Other

        ////   Highly Voted  9 months, 3 weeks ago A, come on admin, check this questions again! upvoted 36 times
        //  2 months, 2 weeks ago
        explanation: "Prates_BR - Should do more reading"
    },
    {// Question #35
        number: 35,
        question: "A company wants to limit its employees' AWS access to a portfolio of predefined AWS resources. Which AWS solution should the company use to meet this requirement?",
        options: [
            "AWS Config",
            "AWS software development kits (SDKs)",
            "AWS Service Catalog",
            "AWS AppSync"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: `C. What is the use of service catalog in AWS?
    AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS. These IT services can include everything from virtual machine images, servers, software, and databases to complete multi-tier application architectures.`
    },

    {// Question #36
        number: 36,
        question: `An online company was running a workload on premises and was struggling to launch new products and features. After migrating the workload to AWS, the company can quickly launch products and features and can scale its infrastructure as required.
    Which AWS Cloud value proposition does this scenario describe?`,
        options: [
            "Business agility",
            "High availability",
            "Security",
            "Centralized auditing"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  7 months ago
        explanation: "A.- ttps://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html"
    },
    {// Question #37
        number: 37,
        question: "Which of the following are advantages of the AWS Cloud? (Choose two.)",
        options: [
            "AWS management of user-owned infrastructure",
            "Ability to quickly change required capacity",
            "High economies of scale",
            "Increased deployment time to market",
            "Increased fixed expenses"
        ],
        correctAnswers: [1, 2],
        //Community vote distribution
        //BC (89%)	5%

        //   Highly Voted  6 months, 3 weeks ago
        explanation: "B.- In the 6 advantages of Cloud :"
    },
    {// Question #38
        number: 38,
        question: "AWS has the ability to achieve lower pay-as-you-go pricing by aggregating usage across hundreds of thousands of users. This describes which advantage of the AWS Cloud?",
        options: [
            "Launch globally in minutes",
            "Increase speed and agility",
            "High economies of scale",
            "No guessing about compute capacity"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //  1 day, 16 hours ago
        explanation: "C.- . High economies of scale"
        //upvoted 1 times
    },

    {// Question #39
        number: 39,
        question: `A company has a database server that is always running. The company hosts the server on Amazon EC2 instances. The instance sizes are suitable for the workload. The workload will run for 1 year.
    Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?`,
        options: [
            "Standard Reserved Instances",
            "On-Demand Instances",
            "Spot Instances",
            "Convertible Reserved Instances"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //  1 day, 16 hours ago
        explanation: "A.- . Standard Reserved Instances"
    },
    {// Question #40
        number: 40,
        question: "A company is developing a mobile app that needs a high-performance NoSQL database. Which AWS services could the company use for this database? (Choose two.)",
        options: [
            "Amazon Aurora",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon DocumentDB (with MongoDB compatibility)",
            "Amazon DynamoDB"
        ],
        correctAnswers: [1, 4],
        //Community vote distribution
        //DE (98%)

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "Answer should be D & E, because RDS is a SQL based DB. Dynamo DB and Document DB are the only No-SQL options."
        //upvoted 71 times
    },
    {// Question #41
        number: 41,
        question: "Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
        options: [
            "Patch the Amazon EC2 guest operating system.",
            "Upgrade the firmware of the network infrastructure.",
            "Apply password rotation for IAM users.",
            "Maintain the physical security of edge locations.",
            "Maintain least privilege access to the root user account."
        ],
        correctAnswers: [1, 3],
        //Community vote distribution
        //BD (92%)	8%

        //  1 day, 16 hours ago
        explanation: "B.- B. Upgrade the firmware of the network infrastructure. Most Voted"
    },
    {// Question #42
        number: 42,
        question: "Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)",
        options: [
            "They are stateless.",
            "They are stateful.",
            "They evaluate all rules before allowing traffic.",
            "They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic.",
            "They operate at the instance level."
        ],
        correctAnswers: [0, 3],
        //Community vote distribution
        //AD (96%)	2%

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "A.- https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html"
    },
    {// Question #43
        number: 43,
        question: `A company has designed its AWS Cloud infrastructure to run its workloads effectively. The company also has protocols in place to continuously improve supporting processes.
    Which pillar of the AWS Well-Architected Framework does this scenario represent?`,
        options: [
            "Security",
            "Performance efficiency",
            "Cost optimization",
            "Operational excellence"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (90%)	10%

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "Correct answer is D -The Operational Excellence pillar includes the ability to support development and run workloads effectively, gain insight into their operations, and to continuously improve supporting processes and procedures to deliver business value."
    },
    {// Question #44
        number: 44,
        question: "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
        options: [
            "Amazon Route 53",
            "Amazon Macie",
            "AWS Direct Connect",
            "AWS PrivateLink"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (81%)	D (19%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: `C.- orrect answer is C- Direct connect is for private dedicated connection between on premise and AWS. PrivateLink provides direct secure connections from VPCs to other AWS services.
    VPC Private Link is a way of making your service available to set of consumers. You can expose a service and the consumers can consume your service by creating an endpoint for your service.With Priva},teLink, endpoints are instead created directly inside of your VPC, using Elastic Network Interfaces (ENIs) and IP addresses in your VPC's subnets.To use AWS PrivateLink, create a VPC endpoint in your VPC, specifying the name of the service and a subnet. This creates an elastic network interface in the subnet that serves as an entry point for traffic destined to the service. The service is now in your VPC, enabling connectivity to AWS services via private IP addresses.`
    },
    {// Question #45
        number: 45,
        question: "A company needs to graphically visualize AWS billing and usage over time. The company also needs information about its AWS monthly costs. Which AWS Billing and Cost Management tool provides this data in a graphical format?",
        options: [
            "AWS Bills",
            "Cost Explorer",
            "AWS Cost and Usage Report",
            "AWS Budgets"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (93%)	4%

        //   Highly Voted  6 months, 2 weeks ago
        explanation: "B.- oth Cost Explorer and Cost and Usage reports are for same purpose. The main difference is Cost Explorer gives graphically representation. so correct answer is B"
        //upvoted 8 times
    },

    {// Question #46
        number: 46,
        question: `A company wants to run production workloads on AWS. The company needs concierge service, a designated AWS technical account manager (TAM), and technical support that is available 24 hours a day, 7 days a week.
    Which AWS Support plan will meet these requirements?`,
        options: [
            "AWS Basic Support",
            "AWS Enterprise Support",
            "AWS Business Support",
            "AWS Developer Support"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  3 days ago
        explanation: "B. AWS Enterprise Support"
        //upvoted 1 times
    },
    {// Question #47
        number: 47,
        question: "Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?",
        options: [
            "Use a monolithic design.",
            "Design for automation.",
            "Design for single points of failure.",
            "Loosely couple components."
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  9 months, 1 week ago
        explanation: "Loosely coupled is correct. In the cloud practitioner course states that in a microservices approach, application components are loosely coupled. In this case, if a single component fails, the other components continue to work because they are communicating with each other. The loose coupling prevents the entire application from failing."
        //upvoted 16 times
    },

    {// Question #48
        number: 48,
        question: "Which AWS services are managed database services? (Choose two.)",
        options: [
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon S3",
            "Amazon RDS",
            "Amazon Elastic File System (Amazon EFS)",
            "Amazon DynamoDB"
        ],
        correctAnswers: [2, 4],
        //Community vote distribution
        //CE (100%)

        //   Highly Voted  8 months, 2 weeks ago
        explanation: "A , B & D are Storage Services.. and C & E are Database Services..."
        //upvoted 20 times
    },
    {// Question #49
        number: 49,
        question: `A company is using the AWS Free Tier for several AWS services for an application.
    What will happen if the Free Tier usage period expires or if the application use exceeds the Fr"ee Tier usage limits`,
        options: [
            "The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage.",
            "AWS Support will contact the company to set up standard service charges.",
            "The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period.",
            "The company's AWS account will be frozen and can be restarted after a payment plan is established."
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (91%)	4%

        //  3 days ago
        explanation: "A. The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage."
        //upvoted 1 times
    },

    {// Question #50
        number: 50,
        question: `A company recently deployed an Amazon RDS instance in its VPC. The company needs to implement a stateful firewall to limit traffic to the private corporate network.
    Which AWS service or feature should the company use to limit network traffic directly to its RDS instance?`,
        options: [
            "Network ACLs",
            "Security groups",
            "AWS WAF",
            "Amazon GuardDuty"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //B (95%)	5%

        //   Highly Voted  8 months ago
        explanation: "stateless-Netwrok ACL stateful ; security group"
        ////upvoted 33 times
    },
    {// Question #51
        number: 51,
        question: "Which AWS service uses machine learning to help discover, monitor, and protect sensitive data that is stored in Amazon S3 buckets?",
        options: [
            "AWS Shield",
            "Amazon Macie",
            "AWS Network Firewall",
            "Amazon Cognito"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: "B.- ttps://aws.amazon.com/macie/"
    },

    {// Question #52
        number: 52,
        question: "A company wants to improve the overall availability and performance of its applications that are hosted on AWS. Which AWS service should the company use?",
        options: [
            "Amazon Connect",
            "Amazon Lightsail",
            "AWS Global Accelerator",
            "AWS Storage Gateway"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (88%)	12%

        //   Highly Voted  6 months, 4 weeks ago
        explanation: "C.- lobal Accelerator improves overall performance and availability. Those who vote B should go check the use cases covered by LightSail and that it's ONE virtual server, not the best when it comes to availability and performance..."
        //upvoted 8 times
    },

    {// Question #53
        number: 53,
        question: "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
        options: [
            "AWS Service Catalog",
            "AWS Systems Manager",
            "AWS IAM Access Analyzer",
            "AWS Organizations"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "C.- ccess Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html"
        //upvoted 17 times
    },

    {// Question #54
        number: 54,
        question: `A company does not want to rely on elaborate forecasting to determine its usage of compute resources. Instead, the company wants to pay only for the resources that it uses. The company also needs the ability to increase or decrease its resource usage to meet business requirements.
    Which pillar of the AWS Well-Architected Framework aligns with these requirements?`,
        options: [
            "Operational excellence",
            "Security",
            "Reliability",
            "Cost optimization"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (66%)	C (34%)

        //  3 days ago
        explanation: "D. Cost optimization."
        //upvoted 1 times
    },
    {// Question #55
        number: 55,
        question: "A company wants to launch its workload on AWS and requires the system to automatically recover from failure. Which pillar of the AWS Well-Architected Framework includes this requirement?",
        options: [
            "Cost optimization",
            "Operational excellence",
            "Performance efficiency",
            "Reliability"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //  3 days ago
        explanation: "D. Reliability."
        //upvoted 1 times
    },

    {// Question #56
        number: 56,
        question: `A large enterprise with multiple VPCs in several AWS Regions around the world needs to connect and centrally manage network connectivity between its VPCs.
    Which AWS service or feature meets these requirements?`,
        options: [
            "AWS Direct Connect",
            "AWS Transit Gateway",
            "AWS Site-to-Site VPN",
            "VPC endpoints"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  8 months ago
        explanation: `B.- nswer is B. Keyword here is "centrally". Transit gateway acts as a central hub to connect VPCs.`
    },
    {// Question #57
        number: 57,
        question: "Which AWS service supports the creation of visual reports from AWS Cost and Usage Report data?",
        options: [
            "Amazon Athena",
            "Amazon QuickSight",
            "Amazon CloudWatch",
            "AWS Organizations"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //B (82%)	A (18%)

        //   Highly Voted  9 months ago
        explanation: `Quicksight for sure. Check the link below. In addition I did a lab last week doing exactly what this scenario talks about.
    https://aws.amazon.com/premiumsupport/knowledge-center/quicksight-cost-usage-report/`
    },

    {// Question #58
        number: 58,
        question: "Which AWS service should be used to monitor Amazon EC2 instances for CPU and network utilization?",
        options: [
            "Amazon Inspector",
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "AWS Config"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  8 months, 2 weeks ago
        explanation: "C.- mazon CloudWatch is a web service that enables you to monitor and manage various metrics and configure alarm actions based on data from those metrics."
        //CloudWatch uses metrics to represent the data points for your resources. AWS services send metrics to CloudWatch. CloudWatch then uses these metrics to create graphs autom},atically that show how performance has changed over time.
    },
    {// Question #59
        number: 59,
        question: `A company is preparing to launch a new web store that is expected to receive high traffic for an upcoming event. The web store runs only on AWS, and the company has an AWS Enterprise Support plan.
    Which AWS resource will provide guidance about how the company should scale its architecture and operational support during the event?`,
        options: [
            "AWS Abuse team",
            "The designated AWS technical account manager (TAM)",
            "AWS infrastructure event management",
            "AWS Professional Services"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //C (70%)	B (30%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "C.- "
    },
    {// Question #60
        number: 60,
        question: "A user wants to deploy a service to the AWS Cloud by using infrastructure-as-code (IaC) principles. Which AWS service can be used to meet this requirement?",
        options: [
            "AWS Systems Manager",
            "AWS CloudFormation",
            "AWS CodeCommit",
            "AWS Config"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  8 months, 2 weeks ago
        explanation: "Infrastructure as code is the process of provisioning and managing your cloud resources by writing a template file that is both human readable, and machine consumable. For AWS cloud development the built-in choice for infrastructure as code is AWS CloudFormation."
        //upvoted 16 times
    },
    {// Question #61
        number: 61,
        question: `A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation of
    AWS accounts, apply service control policies (SCPs), and simplify billing processes. Which AWS service or tool should the company use to meet these requirements?`,
        options: [
            "AWS Organizations",
            "Cost Explorer",
            "AWS Budgets",
            "AWS Trusted Advisor"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  7 months ago
        explanation: "A.- iveaways in question:"
    },
    {// Question #62
        number: 62,
        question: "Which IT controls do AWS and the customer share, according to the AWS shared responsibility model? (Choose two.)",
        options: [
            "Physical and environmental controls",
            "Patch management",
            "Cloud awareness and training",
            "Zone security",
            "Application data encryption"
        ],
        correctAnswers: [1, 2],
        //Community vote distribution
        //BC (73%)	AB (18%)	9%

        //   Highly Voted  9 months, 1 week ago
        explanation: "Shared Controls  Controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives. In a shared control, AWS provides the requirements for the infrastructure and the customer must provide their own control implementation within their use of AWS services. Examples include:"
    },

    {// Question #63
        number: 63,
        question: `A company is launching an application in the AWS Cloud. The application will use Amazon S3 storage. A large team of researchers will have shared access to the data. The company must be able to recover data that is accidentally overwritten or deleted.
    Which S3 feature should the company turn on to meet this requirement?`,
        options: [
            "Server access logging",
            "S3 Versioning",
            "S3 Lifecycle rules",
            "Encryption in transit and at rest"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  8 months, 4 weeks ago
        explanation: "B is the correct answer: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html"
        //upvoted 7 times
    },
    {// Question #64
        number: 64,
        question: `A manufacturing company has a critical application that runs at a remote site that has a slow internet connection. The company wants to migrate the workload to
    AWS. The application is sensitive to latency and interruptions in connectivity.The company wants a solution that can host this application with minimum latency.
    Which AWS service or feature should the company use to meet these requirements?`,
        options: [
            "Availability Zones",
            "AWS Local Zones",
            "AWS Wavelength",
            "AWS Outposts"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //D (54%)	B (41%)	4%

        //   Highly Voted  8 months, 3 weeks ago
        explanation: "D.- "
    },
    {// Question #65"
        number: 65,
        question: `A company wants to migrate its applications from its on-premises data center to a VPC in the AWS Cloud. These applications will need to access on-premises resources.
    Which actions will meet these requirements? (Choose two.)`,
        options: [
            "Use AWS Service Catalog to identify a list of on-premises resources that can be migrated.",
            "Create a VPN connection between an on-premises device and a virtual private gateway in the VPC.",
            "Use an Amazon CloudFront distribution and configure it to accelerate content delivery close to the on-premises resources.",
            "Set up an AWS Direct Connect connection between the on-premises data center and AWS.",
            "Use Amazon CloudFront to restrict access to static web content provided through the on-premises web servers."
        ],
        correctAnswers: [0, 3],
        //Community vote distribution
        //BD (85%)	Other

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "B.- "
    },
    {// Question #66,
        number: 66,
        question: "A company wants to use the AWS Cloud to provide secure access to desktop applications that are running in a fully managed environment. Which AWS service should the company use to meet this requirement?",
        options: [
            "Amazon S3",
            "Amazon AppStream 2.0",
            "AWS AppSync",
            "AWS Outposts"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //B (94%)	6%

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "AppStream 2.0 is a fully managed application streaming service that provides users instant access to their desktop applications from anywhere"
        //upvoted 18 times
    },

    {// Question #67
        number: 67,
        question: "A company wants to implement threat detection on its AWS infrastructure. However, the company does not want to deploy additional software. Which AWS service should the company use to meet these requirements?",
        options: [
            "Amazon VPC",
            "Amazon EC2",
            "Amazon GuardDuty",
            "AWS Direct Connect"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //  3 days ago
        explanation: "C.- . Amazon GuardDuty"
        //upvoted 1 times
    },

    {// Question #68
        number: 68,
        question: "Which AWS service uses edge locations?",
        options: [
            "Amazon Aurora",
            "AWS Global Accelerator",
            "Amazon Connect",
            "AWS Outposts"
        ],
        correctAnswers: [1],
        explanation: "Reference: https://aws.amazon.com/global-accelerator/"
        //Community vote distribution
        //B (78%)	D (22%)

        //   Highly Voted  9 months ago
        //Vote for B.
    },
    {// Question #69
        number: 69,
        question: `A company needs to install an application in a Docker container.
    Which AWS service eliminates the need to provision and manage the container ho"sts`,
        options: [
            "AWS Fargate",
            "Amazon FSx for Windows File Server",
            "Amazon Elastic Container Service (Amazon ECS)",
            "Amazon EC2"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //A (59%)	C (41%)

        //   Highly Voted  8 months, 3 weeks ago
        explanation: `C.- he answer is easier than You think. "Which AWS Service	"`
    },
    {// Question #70
        number: 70,
        question: "Which AWS service or feature checks access policies and offers actionable recommendations to help users set secure and functional policies?",
        options: [
            "AWS Systems Manager",
            "AWS IAM Access Analyzer",
            "AWS Trusted Advisor",
            "Amazon GuardDuty"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (77%)	C (23%)

        //  2 days, 23 hours ago
        explanation: "B.- . AWS IAM Access Analyzer"
        //upvoted 1 times
    },

    {// Question #71
        number: 71,
        question: `A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later.
    Which AWS service should the company use to meet these requirements?`,
        options: [
            "AWS IoT Core",
            "Amazon Lightsail",
            "AWS Storage Gateway",
            "AWS Snowball Edge"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (79%)	A (18%)

        //   Highly Voted  9 months ago
        explanation: "D.- WS Snow Family - The AWS Snow Family is a collection of physical devices that help migrate large amounts of data into and out of the cloud without depending on networks. This helps you apply the wide variety of AWS services for analytics, file systems, and archives to your data. You can use AWS Snow Family services for data transfer and occasional pre-processing on location. Some large data transfer examples include cloud migration, disaster recovery, data center relocation, and/or remote data collection projects. These projects typically require you to migrate large amounts of data in the shortest, and most cost-effective, amount of time."
    },
    {// Question #72
        number: 72,
        question: `A retail company needs to build a highly available architecture for a new ecommerce platform. The company is using only AWS services that replicate data across multiple Availability Zones.
    Which AWS services should the company use to meet this requirement? (Choose two.)`,
        options: [
            "Amazon EC2",
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon Aurora",
            "Amazon DynamoDB",
            "Amazon Redshift"
        ],
        correctAnswers: [0, 1],
        explanation: "Reference:https://aws.amazon.com/rds/features/multi-az/#:~:text=Amazon%20Aurora%20further%20extends%20the,ways%2C%20across%20three% 20Availability%20Zones"
        //Community vote distribution
        //CD (63%)	 	AB (22%)		Other
    },

    {// Question #73
        number: 73,
        question: "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?",
        options: [
            "Agility",
            "Elasticity",
            "Reliability",
            "Durability"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  8 months, 4 weeks ago
        explanation: "B.- lasticity and Agility are pretty much the same thing but Elasticity is for resources (like CPU) and Agility is for services (EC2)."
        //upvoted 10 times
    },

    {// Question #74
        number: 74,
        question: "Service control policies (SCPs) manage permissions for which of the following?",
        options: [
            "Availability Zones",
            "AWS Regions",
            "AWS Organizations",
            "Edge locations"
        ],
        correctAnswers: [2],
        //Reference: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html
        //Community vote distribution
        //C (100%)

        //   Highly Voted  1 year, 7 months ago
        explanation: `Correct answer: C https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html "Service control policies (SCPs) are a type of
    organization policy`
    },

    {// Question #75
        number: 75,
        question: "Which AWS service can be used to encrypt data at rest?",
        options: [
            "Amazon GuardDuty",
            "AWS Shield",
            "AWS Security Hub",
            "AWS Key Management Service (AWS KMS)"
        ],
        correctAnswers: [2],
        explanation: "Reference: https://aws.amazon.com/blogs/security/how-to-protect-data-at-rest-with-amazon-ec2-instance-store-encryption/"

        //Community vote distribution
        //
        //D (100%)
    },

    {// Question #76
        number: 76,
        question: "Which characteristics are advantages of using the AWS Cloud? (Choose two.)",
        options: [
            "A 100% service level agreement (SLA) for all AWS services",
            "Compute capacity that is adjusted on demand",
            "Availability of AWS Support for code development",
            "Enhanced security",
            "Increases in cost and complexity"
        ],
        correctAnswers: [1, 3],
        explanation: "Reference: https://intellipaat.com/blog/aws-benefits-and-drawbacks/"
        //Community vote distribution
        //BD (100%)

        //  2 days, 23 hours ago
    },
    {// Question #77
        number: 77,
        question: "A user is storing objects in Amazon S3. The user needs to restrict access to the objects to meet compliance obligations. What should the user do to meet this requirement?",
        options: [
            "Use AWS Secrets Manager.",
            "Tag the objects in the S3 bucket.",
            "Use security groups.",
            "Use network ACLs."
        ],
        correctAnswers: [2],
        //Community vote distribution
        //B (75%)	D (21%)	3%

        //   Highly Voted  9 months, 2 weeks ago
        explanation: `B.- secrets Manager is for secrets (passwords)
    //Network ACL is a statekless firewall working on IPs, not users},. Security Groups are stateful firewall, not for user permissions. In this case I'd say tags:`
    },

    {// Question #78
        number: 78,
        question: `A company wants to convert video files and audio files from their source format into a format that will play on smartphones, tablets, and web browsers.
    Which AWS service will meet these requirements?`,
        options: [
            "Amazon Elastic Transcoder",
            "Amazon Comprehend",
            "AWS Glue",
            "Amazon Rekognition"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  8 months, 3 weeks ago
        explanation: "Lol. My CLF-001 training didn't cover this. Glad this review exists!"
        //upvoted 9 times
    },
    {// Question #79
        number: 79,
        question: "Which of the following are benefits of Amazon EC2 Auto Scaling? (Choose two.)",
        options: [
            "Improved health and availability of applications",
            "Reduced network latency",
            "Optimized performance and costs",
            "Automated snapshots of data",
            "Cross-Region Replication"
        ],
        correctAnswers: [0, 1],
        //Community vote distribution
        //AC (100%)

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "Should it be A and C?"
        //upvoted 17 times
    },
    {// Question #80
        number: 80,
        question: `A company has several departments. Each department has its own AWS accounts for its applications. The company wants all AWS costs on a single invoice to simplify payment, but the company wants to know the costs that each department is incurring.
    Which AWS tool or feature will provide this functionality?`,
        options: [
            "AWS Cost and Usage Reports",
            "Consolidated billing",
            "Savings Plans",
            "AWS Budgets"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  2 days, 23 hours ago
        explanation: "B.- . Consolidated billing"
    },
    {// Question #81
        number: 81,
        question: "A company runs its workloads on premises. The company wants to forecast the cost of running a large application on AWS. Which AWS service or tool can the company use to obtain this information?",
        options: [
            "AWS Pricing Calculator",
            "AWS Budgets",
            "AWS Trusted Advisor",
            "Cost Explorer"
        ],
        correctAnswers: [0],
        explanation: "Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html\nA.-"
        //Community vote distribution
        //A (94%)	6%
        //   Highly Voted  1 year, 6 months ago
        //explanation: "A.- 
    },
    {// Question #82"
        number: 82,
        question: `A company wants to eliminate the need to guess infrastructure capacity before deployments. The company also wants to spend its budget on cloud resources only as the company uses the resources.
    Which advantage of the AWS Cloud matches the company's requirements?`,
        options: [
            "Reliability",
            "Global reach",
            "Economies of scale",
            "Pay-as-you-go pricing"
        ],
        correctAnswers: [2],
        explanation: "Reference: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html"
        //Community vote distribution
        //D (87%)	10%

        //  2 days, 23 hours ago
    },

    {// Question #83
        number: 83,
        question: "Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, co- location environments, or on-premises facilities?",
        options: [
            "AWS Snowmobile",
            "AWS Local Zones",
            "AWS Outposts",
            "AWS Fargate"
        ],
        correctAnswers: [2],
        //Reference: https://aws.amazon.com/outposts/
        //Community vote distribution
        //C (100%)

        //   Highly Voted  5 months, 1 week ago
        explanation: "C.- . AWS Outposts"
    },
    {// Question #84
        number: 84,
        question: `A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud.
    Which AWS service should the company use to meet this requirement?`,
        options: [
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon S3",
            "Amazon Elastic File System (Amazon EFS)",
            "AWS Storage Gateway"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (94%)	6%

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "AWS Storage Gateway is a set of hybrid cloud storage services that provide on-premises access to virtually unlimited cloud storage."
        //upvoted 13 times
    },
    {// Question #85
        number: 85,
        question: `An online retail company has seasonal sales spikes several times a year, primarily around holidays. Demand is lower at other times. The company finds it difficult to predict the increasing infrastructure demand for each season.
    Which advantages of moving to the AWS Cloud would MOST benefit the company? (Choose two.)`,
        options: [
            "Global footprint",
            "Elasticity",
            "AWS service quotas",
            "AWS shared responsibility model",
            "Pay-as-you-go pricing"
        ],
        correctAnswers: [1, 4],
        explanation: "Reference: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html"
        //Community vote distribution
        //BE (100%)
    },

    {// Question #86
        number: 86,
        question: "Which AWS service can be used to turn text into lifelike speech?",
        options: [
            "Amazon Polly",
            "Amazon Kendra",
            "Amazon Rekognition",
            "Amazon Connect"
        ],
        correctAnswers: [0],
        //Reference: https://aws.amazon.com/polly/#:~:text=Amazon%20Polly%20is%20a%20service,synthesize%20natural%20sounding%20human%20speech
        //Community vote distribution
        //A (100%)

        //   Highly Voted  5 months, 1 week ago
        explanation: "A.- . Amazon Polly"
    },
    {// Question #87
        number: 87,
        question: "Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?",
        options: [
            "VPC Flow Logs",
            "Amazon Inspector",
            "VPC endpoint services",
            "NAT gateway"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC."
        //upvoted 7 times
    },

    {// Question #88
        number: 88,
        question: `A company wants to ensure that two Amazon EC2 instances are in separate data centers with minimal communication latency between the data centers.
    How can the company meet this requirement?`,
        options: [
            "Place the EC2 instances in two separate AWS Regions connected with a VPC peering connection.",
            "Place the EC2 instances in two separate Availability Zones within the same AWS Region.",
            "Place one EC2 instance on premises and the other in an AWS Region. Then connect them by using an AWS VPN connection.",
            "Place both EC2 instances in a placement group for dedicated bandwidth."
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (82%)	D (18%)

        //   Highly Voted  1 year, 8 months ago
        explanation: "answer is B ... this is the definition of Available Zones ... separate data centers with minimal communication latency"
        //upvoted 22 times
    },
    {// Question #89
        number: 89,
        question: "In which situations should a company create an IAM user instead of an IAM role? (Choose two.)",
        options: [
            "When an application that runs on Amazon EC2 instances requires access to other AWS services",
            "When the company creates AWS access credentials for individuals",
            "When the company creates an application that runs on a mobile phone that makes requests to AWS",
            "When the company needs to add users to IAM groups",
            "When users are authenticated in the corporate network and want to be able to use AWS without having to sign in a second time"
        ],
        correctAnswers: [1, 3],
        //Community vote distribution
        //BD (77%)	AC (23%)

        //   Highly Voted  5 months, 2 weeks ago
        explanation: "B/D are correct"
    },

    {// Question #90
        number: 90,
        question: "Which AWS services should a company use to read and write data that changes frequently? (Choose two.)",
        options: [
            "Amazon S3 Glacier",
            "Amazon RDS",
            "AWS Snowball",
            "Amazon Redshift",
            "Amazon Elastic File System (Amazon EFS)"
        ],
        correctAnswers: [1, 3],
        //Community vote distribution
        //BE (69%)	BD (31%)

        //   Highly Voted  5 months, 4 weeks ago
        explanation: `The correct answers are: B. Amazon RDS and D. Amazon Redshift.
    Amazon S3 Glacier (option A) is a storage service for archiving data that is infrequently accessed and for which retrieval times of several hours are acceptable. It is not suitable for data that changes frequently. AWS Snowball (option C) is a data transfer service that enables the transfer of large amounts of data into and out of AWS using physical devices. It is not designed for reading and writing data that changes frequently. Amazon Elastic File System (Amazon EFS) (option E) is a fully managed file storage service for use with Amazon EC2 instances. It is designed for storing and sharing files, and is not suitable for storing data that changes frequently.`
    },

    {// Question #91
        number: 91,
        question: "Which AWS service is used to provide encryption for Amazon EBS?",
        options: [
            "AWS Certificate Manager",
            "AWS Systems Manager",
            "AWS KMS",
            "AWS Config"
        ],
        correctAnswers: [2]
        //Community vote distribution
        //C (100%)

        //   Highly Voted  1 year, 7 months ago
        //finally a correct answer
        //upvoted 15 times
    },

    {// Question #92
        number: 92,
        question: "Which AWS services make use of global edge locations? (Choose two.)",
        options: [
            "AWS Fargate",
            "Amazon CloudFront",
            "AWS Global Accelerator",
            "AWS Wavelength",
            "Amazon VPC"
        ],
        correctAnswers: [1, 2],
        explanation: "Reference: https:/r 20commonly,caches%20content%20in%20edge%20locations"

        //Community vote distribution
        //
        //BC (91%)	9%
    },
    {// Question #93
        number: 93,
        question: `A company is operating several factories where it builds products. The company needs the ability to process data, store data, and run applications with local system interdependencies that require low latency.
    Which AWS service should the company use to meet these requirements?`,
        options: [
            "AWS IoT Greengrass",
            "AWS Lambda",
            "AWS Outposts",
            "AWS Snowball Edge"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //C (81%)	Other

        //   Highly Voted  6 months ago
        explanation: "it says... ...local system interdependencies that require low latency... ==> C"
    },

    {// Question #94
        number: 94,
        question: "Which of the following is a recommended design principle for AWS Cloud architecture?",
        options: [
            "Design tightly coupled components.",
            "Build a single application component that can handle all the application functionality.",
            "Make large changes on fewer iterations to reduce chances of failure.",
            "Avoid monolithic architecture by segmenting workloads."
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (94%)	6%

        //   Highly Voted  8 months, 3 weeks ago
        explanation: "You'll laugh when you read question 95. XD It just proved C is not the answer."
    },
    //95. A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments.

    {// Question #95
        number: 95,
        question: `A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments.
    Which pillar of the AWS Well-Architected Framework does this design support?`,
        options: [
            "Security",
            "Performance efficiency",
            "Operational excellence",
            "Reliability"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //C (96%)	4%

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "C.- ttps://wa.aws.amazon.com/wellarchitected/2020-07-02T19-33-23/wat.pillar.operationalExcellence.en.html"
    },
    {// Question #96
        number: 96,
        question: "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
        options: [
            "Network access control list",
            "Security groups",
            "AWS Trusted Advisor",
            "Virtual private gateways"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (83%)	C (17%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "Security group Operates at the instance level, while Network ACL Operates at the subnet level."
        //upvoted 16 times
    },

    {// Question #97
        number: 97,
        question: "A company has a workload that will run continuously for 1 year. The workload cannot tolerate service interruptions. Which Amazon EC2 purchasing option will be MOST cost-effective?",
        options: [
            "All Upfront Reserved Instances",
            "Partial Upfront Reserved Instances",
            "Dedicated Instances",
            "On-Demand Instances"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (96%)	4%

        //   Highly Voted  9 months, 1 week ago
        explanation: "A.- ith the All Upfront option, you pay for the entire Reserved Instance term with one upfront payment. This option provides you with the largest discount compared to On-Demand Instance pricing."
    },

    {// Question #98
        number: 98,
        question: "Which AWS service helps protect against DDoS attacks?",
        options: [
            "AWS Shield",
            "Amazon Inspector",
            "Amazon GuardDuty",
            "Amazon Detective"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "i like this kind of qustion LOL"
        //upvoted 9 times
    },

    {// Question #99
        number: 99,
        question: "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
        options: [
            "Security",
            "Operational excellence",
            "Performance efficiency",
            "Cost optimization"
        ],
        correctAnswers: [0],
        //Reference:https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf (12)
        //Community vote distribution
        //A (71%)	B (29%)

        //   Highly Voted  1 year, 8 months ago
        explanation: `From the Security section of https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf "  Enable traceability: Monitor, alert, and audit actions and changes to your environment in real time. Integrate log and metric collection with systems to automatically investigate and take action.`
    },

    {// Question #100
        number: 100,
        question: "Which AWS tool or feature acts as a VPC firewall at the subnet level?",
        options: [
            "Security group",
            "Network ACL",
            "Traffic Mirroring",
            "Internet gateway"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (93%)	7%

        //   Highly Voted  6 months, 3 weeks ago
        explanation: "B.- etwork ACL >>> Subnet level Security Groups >>>> Instance level"
        //upvoted 12 times
    },

    {// Question #101
        number: 101,
        question: "Which AWS service can be used to decouple applications?",
        options: [
            "AWS Config",
            "Amazon Simple Queue Service (Amazon SQS)",
            "AWS Batch",
            "Amazon Simple Email Service (Amazon SES)"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  10 months, 3 weeks ago
        explanation: "B.- ttps://docs.aws.amazon.com/sqs/?id=docs_gateway"
    },

    {// Question #102
        number: 102,
        question: "Which disaster recovery option is the LEAST expensive?",
        options: [
            "Warm standby",
            "Multisite",
            "Backup and restore",
            "Pilot light"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  1 year, 2 months ago
        explanation: "C.-  - Nice graph here: https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the- cloud.html"
        ////upvoted 33 times
    },

    {// Question #103
        number: 103,
        question: "Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?",
        options: [
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon EC2 instance store",
            "Amazon Elastic File System (Amazon EFS)",
            "Amazon S3"
        ],
        correctAnswers: [1],
        explanation: `When you stop or terminate an instance, every block of storage in the instance store is reset. Therefore, your data cannot be accessed through the instance store of another instance.
    Reference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html`
        //Community vote distribution
        //B (100%)

        //  1 week, 6 days ago
        //B is correct.
    },
    {// Question #104
        number: 104,
        question: "Which of the following is a characteristic of the AWS account root user?",
        options: [
            "The root user is the only user that can be configured with multi-factor authentication (MFA).",
            "The root user is the only user that can access the AWS Management Console.",
            "The root user is the first sign-in identity that is available when an AWS account is created.",
            "The root user has a password that cannot be changed."
        ],
        correctAnswers: [1],
        explanation: "Reference: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html"

        //Community vote distribution
        //
        //C (100%)

        //   Highly Voted  9 months, 3 weeks ago
    },
    {// Question #105
        number: 105,
        question: `A company hosts an application on an Amazon EC2 instance. The EC2 instance needs to access several AWS resources, including Amazon S3 and Amazon
    DynamoDB.
    What is the MOST operationally efficient solution to delegate permissions?`,
        options: [
            "Create an IAM role with the required permissions. Attach the role to the EC2 instance.",
            "Create an IAM user and use its access key and secret access key in the application.",
            "Create an IAM user and use its access key and secret access key to create a CLI profile in the EC2 instance",
            "Create an IAM role with the required permissions. Attach the role to the administrative IAM user."
        ],
        correctAnswers: [0],
        explanation: "Reference: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"
        //Community vote distribution
        //A (83%)	D (17%)
    },

    {// Question #106
        number: 106,
        question: "Which of the following is a component of the AWS Global Infrastructure?",
        options: [
            "Amazon Alexa",
            "AWS Regions",
            "Amazon Lightsail",
            "AWS Organizations"
        ],
        correctAnswers: [1],
        explanation: "Reference: https://aws.amazon.com/about-aws/global-infrastructure/"
        //Community vote distribution
        //B (100%)

        //   Highly Voted  1 year, 7 months ago
        //AWS Global Infrastructure:
    },
    {// Question #107
        number: 107,
        question: "What is the purpose of having an internet gateway within a VPC?",
        options: [
            "To create a VPN connection to the VPC",
            "To allow communication between the VPC and the internet",
            "To impose bandwidth constraints on internet traffic",
            "To load balance traffic from the internet across Amazon EC2 instances"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  2 months, 3 weeks ago
        //explanation: "B.- nternet Gateway upvoted 1 times"
        //  5 months ago},
        //explanation: "B.-  is the answer. upvoted 1 times"
    },
    {// Question #108
        number: 108,
        question: "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
        options: [
            "Amazon GuardDuty",
            "AWS Security Hub",
            "AWS Artifact",
            "AWS Shield"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  1 year, 8 months ago
        explanation: "C-Artifact is correct"
        //upvoted 10 times
    },

    {// Question #109
        number: 109,
        question: `A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect.
    Which AWS service or feature should the company use to help simplify management and reduce operational costs?`,
        options: [
            "VPC endpoint",
            "AWS Direct Connect",
            "AWS Transit Gateway",
            "VPC peering"
        ],
        correctAnswers: [2],
        explanation: "Reference:https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf (9)"
        //Community vote distribution
        //C (82%)	D (18%)

        //   Highly Voted  1 year, 8 months ago
    },
    {// Question #110
        number: 110,
        question: `A company is planning an infrastructure deployment to the AWS Cloud. Before the deployment, the company wants a cost estimate for running the infrastructure.
    Which AWS service or feature can provide this information?`,
        options: [
            "Cost Explorer",
            "AWS Trusted Advisor",
            "AWS Cost and Usage Report",
            "AWS Pricing Calculator"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: `D. pricing calculator -estimate cost
    cost explore --graph--show cost, usage over time`
    },
    {// Question #111
        number: 111,
        question: "Which AWS service of tool helps to centrally manage billing and allow controlled access to resources across AWS accounts?",
        options: [
            "AWS Identity and Access Management (IAM)",
            "AWS Organizations",
            "Cost Explorer",
            "AWS Budgets"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (92%)	8%

        //  2 months, 1 week ago
        explanation: "B is the correct answer"
        //upvoted 1 times
    },

    {// Question #112
        number: 112,
        question: "Which of the following are Amazon Virtual Private Cloud (Amazon VPC) resources?",
        options: [
            "Objects; access control lists (ACLs)",
            "Subnets; internet gateways",
            "Access policies; buckets",
            "Groups; roles"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  2 months, 3 weeks ago
        explanation: "B.-  vote B"
        //upvoted 1 times
    },

    {// Question #113
        number: 113,
        question: "A company needs to identify the last time that a specific user accessed the AWS Management Console. Which AWS service will provide this information?",
        options: [
            "Amazon Cognito",
            "AWS CloudTrail",
            "Amazon Inspector",
            "Amazon GuardDuty"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  2 months, 3 weeks ago
        explanation: "B.-  vote B"
        //upvoted 1 times
    },

    {// Question #114
        number: 114,
        question: "A company launched an Amazon EC2 instance with the latest Amazon Linux 2 Amazon Machine Image (AMI). Which actions can a system administrator take to connect to the EC2 instance? (Choose two.)",
        options: [
            "Use Amazon EC2 Instance Connect.",
            "Use a Remote Desktop Protocol (RDP) connection.",
            "Use AWS Batch",
            "Use AWS Systems Manager Session Manager.",
            "Use Amazon Connect"
        ],
        correctAnswers: [0, 2],
        //Community vote distribution
        //AD (100%)

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "A & D. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html"
        //upvoted 20 times
    },
    {// Question #115
        number: 115,
        question: `A company wants to perform sentiment analysis on customer service email messages that it receives. The company wants to identify whether the customer service engagement was positive or negative.
    Which AWS service should the company use to perform this analysis?`,
        options: [
            "Amazon Textract",
            "Amazon Translate",
            "Amazon Comprehend",
            "Amazon Rekognition"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (83%)	D (17%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "Amazon Comprehend uses natural language processing (NLP) to extract insights about the content of documents."
        //upvoted 8 times
    },
    {// Question #116
        number: 116,
        question: "What is the total amount of storage offered by Amazon S3?",
        options: [
            "100MB",
            "5 GB",
            "5 TB",
            "Unlimited"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (94%)	6%

        //   Highly Voted  7 months, 1 week ago
        explanation: "D.- nswer is D."
        //Some confused with 5 TB. thats t,he limit for one S3 object.
    },
    {// Question #117
        number: 117,
        question: "A company is migrating to Amazon S3. The company needs to transfer 60 TB of data from an on-premises data center to AWS within 10 days. Which AWS service should the company use to accomplish this migration?",
        options: [
            "Amazon S3 Glacier",
            "AWS Database Migration Service (AWS DMS)",
            "AWS Snowball",
            "AWS Direct Connect"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: `C. snowball
    AWS Snowball is a petabyte-scale data transport service that uses secure devices to transfer large amounts of data into and out of the AWS Cloud. Amazon S3 Glacier (S3 Glacier) is a secure and durable service for low-cost data archiving and long-term backup.
    With S3 Glacier, you can store your data cost effectively for months, years, or even decades. S3 Glacier helps you offload the administrative burdens of operating and scaling storage to AWS, so you don't have to worry about capacity planning, hardware provisioning, data replication, hardware failure detection and recovery, or time-consuming hardware migration`
    },
    {// Question #118
        number: 118,
        question: "What type of database is Amazon DynamoDB?",
        options: [
            "In-memory",
            "Relational",
            "Key-value",
            "Graph"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: "C. Amazon DynamoDB is a fully managed, serverless, *key-value* NoSQL database designed to run high-performance applications at any scale."
        //upvoted 7 times
    },

    {// Question #119
        number: 119,
        question: `A large organization has a single AWS account.
    What are the advantages of reconfiguring the single account "into multiple AWS accounts? (Choose two.`,
        options: [
            "It allows for administrative isolation between different workloads.",
            "Discounts can be applied on a quarterly basis by submitting cases in the AWS Management Console.",
            "Transitioning objects from Amazon S3 to Amazon S3 Glacier in separate AWS accounts will be less expensive.",
            "Having multiple accounts reduces the risks associated with malicious activity targeted at a single account.",
            "Amazon QuickSight offers access to a cost tool that provides application-specific recommendations for environments running in multiple accounts."
        ],
        correctAnswers: [0, 2],
        //Community vote distribution
        //AD (98%)

        //   Highly Voted  1 year, 6 months ago
        explanation: "A and D looks correct"
    },

    {// Question #120
        number: 120,
        question: `A retail company has recently migrated its website to AWS. The company wants to ensure that it is protected from SQL injection attacks. The website uses an
    Application Load Balancer to distribute traffic to multiple Amazon EC2 instances.
    Which AWS service or feature can be used to create a custom rule that blocks SQL injection attacks?`,
        options: [
            "Security groups",
            "AWS WAF",
            "Network ACLs",
            "AWS Shield"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)
        //   Highly Voted  9 months ago
        explanation: "B.- "
    },
    {// Question #121"
        number: 121,
        question: "Which AWS service provides a feature that can be used to proactively monitor and plan for the service quotas of AWS resources?",
        options: [
            "AWS CloudTrail",
            "AWS Personal Health Dashboard",
            "AWS Trusted Advisor",
            "Amazon CloudWatch"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (61%)	D (38%)

        //   Highly Voted  8 months, 3 weeks ago
        explanation: "D.- ttps://aws.amazon.com/about-aws/whats-new/2019/06/introducing-service-quotas-view-and-manage-quotas-for-aws-services-from-one- location/"
        //upvoted 11 times
    },

    {// Question #122
        number: 122,
        question: "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
        options: [
            "Elimination of expenses for running and maintaining data centers",
            "Price discounts that are identical to discounts from hardware providers",
            "Distribution of all operational controls to AWS",
            "Elimination of operational expenses"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //  1 month, 1 week ago
        explanation: `I don't understand the difference between "expenses for running and maintaining data centers" and "operational expenses", aren't they the same thing?`
        //upvoted 2 times
    },

    {// Question #123
        number: 123,
        question: "Which design principle is included in the operational excellence pillar of the AWS Well-Architected Framework?",
        options: [
            "Create annotated documentation.",
            "Anticipate failure.",
            "Ensure performance efficiency.",
            "Optimize costs."
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  //1 month, 3 weeks ago Both A and C are answers upvoted 1 times
        //  2 months ago
        explanation: "The design principle included in the operational excellence pillar of the AWS Well-Architected Framework that anticipates failure is:"
    },

    {// Question #124
        number: 124,
        question: "Which AWS services offer gateway VPC endpoints that can be used to avoid sending traffic over the internet? (Choose two.)",
        options: [
            "Amazon Simple Notification Service (Amazon SNS)",
            "Amazon Simple Queue Service (Amazon SQS)",
            "AWS CodeBuild",
            "Amazon S3",
            "Amazon DynamoDB"
        ],
        correctAnswers: [1, 3],
        //Community vote distribution
        //DE (100%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: "D+ E: S3 and DynamoDB"
    },


    {// Question #125
        number: 125,
        question: "Which of the following is the customer responsible for updating and patching, according to the AWS shared responsibility model?",
        options: [
            "Amazon FSx for Windows File Server",
            "Amazon WorkSpaces virtual Windows desktop",
            "AWS Directory Service for Microsoft Active Directory",
            "Amazon RDS for Microsoft SQL Server"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)
        //   Highly Voted  7 months, 2 weeks ago
        explanation: `B. Amazon worksapce
    We recommend that you regularly patch, update, and secure the operating system and applications on your WorkSpaces. You can configure your WorkSpaces to be updated by WorkSpaces during a regular maintenance window or you can update them yourself.`
        //upvoted 8 times
    },

    {// Question #126
        number: 126,
        question: "Who has the responsibility to patch the host operating system of an Amazon EC2 instance, according to the AWS shared responsibility model?",
        options: [
            "Both AWS and the customer",
            "The customer only",
            "The EC2 hardware manufacturer",
            "AWS only"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //D (72%)	B (28%)

        //   Highly Voted  9 months, 1 week ago
        explanation: "D.- UEST > customer"
    },

    {// Question #127
        number: 127,
        question: `A company is using an Amazon RDS DB instance for an application that is deployed in the AWS Cloud. The company needs regular patching of the operating system of the server where the DB instance runs.
    What is the company's responsibility in this situation, according to the AWS shared responsibility model?`,
        options: [
            "Open a support case to obtain administrative access to the server so that the company can patch the DB instance operating system.",
            "Open a support case and request that AWS patch the DB instance operating system.",
            "Use administrative access to the server, and apply the operating system patches during the regular maintenance window that is defined for the DB instance.",
            "Establish a regular maintenance window that tells AWS when to patch the DB instance operating system."
        ],
        correctAnswers: [1],
        //Community vote distribution
        //D (58%)	B (33%)	9%

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "Should it be D? https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html"
        //upvoted 19 times
    },
    {// Question #128
        number: 128,
        question: "Why is an AWS Well-Architected review a critical part of the cloud design process?",
        options: [
            "A Well-Architected review is mandatory before a workload can run on AWS.",
            "A Well-Architected review helps identify design gaps and helps evaluate design decisions and related documents.",
            "A Well-Architected review is an audit mechanism that is a part of requirements for service level agreements.",
            "A Well-Architected review eliminates the need for ongoing auditing and compliance tests."
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  3 months ago
        explanation: "B.- ttps://docs.aws.amazon.com/wellarchitected/latest/framework/the-review-process.html"
        //upvoted 2 times
    },

    {// Question #129
        number: 129,
        question: `A company implements an Amazon EC2 Auto Scaling policy along with an Application Load Balancer to automatically recover unhealthy applications that run on
    Amazon EC2 instances.
    Which pillar of the AWS Well-Architected Framework does this action cover?`,
        options: [
            "Security",
            "Performance efficiency",
            "Operational excellence",
            "Reliability"
        ],
        correctAnswers: [2],
        explanation: "Reference:https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/wellarchitected-reliability-pillar.pdf"
        //Community vote distribution
        //D (100%)
    },

    {// Question #130
        number: 130,
        question: "Which AWS Cloud benefit is shown by an architecture's ability to withstand failures with minimal downtime?",
        options: [
            "Agility",
            "Elasticity",
            "Scalability",
            "High availability"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  1 year, 6 months ago
        explanation: "D is right. High availability = minimal downtime = recovery quickly from failure. Agility is about how quickly something is deployed. https://aws.amazon.com/marketplace/solutions/infrastructure-software/high-availability"
        //upvoted 9 times
    },

    {// Question #131
        number: 131,
        question: "Under the AWS shared responsibility model, which task is the customer's responsibility when managing AWS Lambda functions?",
        options: [
            "Creating versions of Lambda functions",
            "Maintaining server and operating systems",
            "Scaling Lambda resources according to demand",
            "Updating the Lambda runtime environment"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (68%)	D (27%)	5%

        //   Highly Voted  1 year, 9 months ago
        explanation: "I think it's A"
        //upvoted 40 times
    },

    {// Question #132
        number: 132,
        question: "What does the AWS Concierge Support team provide?",
        options: [
            "A technical expert dedicated to the user",
            "A primary point of contact for AWS Billing and AWS Support",
            "A partner to help provide scaling guidance for an event launch",
            "A dedicated AWS staff member who reviews the user's application architecture"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  9 months, 3 weeks ago
        explanation: "B.- he Support Concierge Team are AWS billing and account experts that specialize in working with enterprise accounts."
        //upvoted 8 times
    },

    {// Question #133
        number: 133,
        question: "A company needs to generate reports that can break down cloud costs by product, by company-defined tags, and by hour, day, and month. Which AWS tool should the company use to meet these requirements?",
        options: [
            "Reserved Instance utilization and coverage reports",
            "Savings Plans utilization reports",
            "AWS Budgets reports",
            "AWS Cost and Usage Reports"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  6 months, 3 weeks ago
        explanation: `D.- rice calculator - for cost estimation
    Cost explorer - for current and past cost and usage in gra},phs Cost and usage reports - for reports`
    },
    {// Question #134
        number: 134,
        question: `A company has a serverless application that includes an Amazon API Gateway API, an AWS Lambda function, and an Amazon DynamoDB database.
    Which AWS service can the company use to trace user requests as they move through the application's components?`,
        options: [
            "AWS CloudTrail",
            "Amazon CloudWatch",
            "Amazon Inspector",
            "AWS X-Ray"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (89%)	11%

        //   Highly Voted  8 months ago
        explanation: "D.- -ray - https://aws.amazon.com/xray/"
    },
    {// Question #135
        number: 135,
        question: "A company needs to set up a petabyte-scale data warehouse in the AWS Cloud. Which AWS service will meet this requirement?",
        options: [
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon ElastiCache"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "Amazon Redshift is a fast, fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to efficiently analyze all your data using your existing business intelligence tools."
        //upvoted 6 times
    },

    {// Question #136
        number: 136,
        question: "Which AWS service is always provided at no charge?",
        options: [
            "Amazon S3",
            "AWS Identity and Access Management (IAM)",
            "Elastic Load Balancers",
            "AWS WAF"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  3 months, 4 weeks ago
        explanation: "Amazin s3 - unlimited storage but charges AWS IAM - free account management service"
        //upvoted 1 times
    },

    {// Question #137
        number: 137,
        question: "A company needs to design an AWS disaster recovery plan to cover multiple geographic areas. Which action will meet this requirement?",
        options: [
            "Configure multiple AWS accounts.",
            "Configure the architecture across multiple Availability Zones in an AWS Region.",
            "Configure the architecture across multiple AWS Regions.",
            "Configure the architecture among many edge locations."
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (77%)	B (23%)

        //   Highly Voted  7 months, 3 weeks ago
        explanation: "C.- rom: https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html"
    },

    {// Question #138
        number: 138,
        question: "Which of the following is a benefit of moving from an on-premises data center to the AWS Cloud?",
        options: [
            "Compute instances can be launched and terminated as needed to optimize costs.",
            "Compute costs can be viewed in the AWS Billing and Cost Management console.",
            "Users retain full administrative access to their compute instances.",
            "Users can optimize costs by permanently running enough instances at peak load."
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (85%)	B (15%)

        //  3 months ago
        //A - yes

        explanation: "B - basic feature C - not true"
    },

    {// Question #139
        number: 139,
        question: "In which ways does the AWS Cloud offer lower total cost of ownership (TCO) of computing resources than on-premises data centers? (Choose two.)",
        options: [
            "AWS replaces upfront capital expenditures with pay-as-you-go costs.",
            "AWS is designed for high availability, which eliminates user downtime.",
            "AWS eliminates the need for on-premises IT staff.",
            "AWS uses economies of scale to continually reduce prices.",
            "AWS offers a single pricing model for Amazon EC2 instances."
        ],
        correctAnswers: [0, 2],
        //Community vote distribution
        //AD (81%)	Other

        //  1 month ago
        explanation: "A.- C is not the right answer since you most likely still need IT staff on-premise."
    },
    {// Question #140
        number: 140,
        question: "Which AWS service monitors AWS accounts for security threats?",
        options: [
            "Amazon GuardDuty",
            "AWS Secrets Manager",
            "Amazon Cognito",
            "AWS Certificate Manager (ACM)"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (73%)	C (27%)

        //  3 months, 3 weeks ago
        explanation: "A is the answer"
        //upvoted 1 times
    },

    {// Question #141
        number: 141,
        question: "Which benefit is included with an AWS Enterprise Support plan?",
        options: [
            "AWS Partner Network (APN) support at no cost.",
            "Designated support from an AWS technical account manager (TAM)",
            "On-site support from AWS engineers",
            "AWS managed compliance as code with AWS Config"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //  3 months ago
        explanation: "B.- . Patch Amazon EC2 instances."
    },

    {// Question #142
        number: 142,
        question: "Which task does AWS perform automatically?",
        options: [
            "Encrypt data that is stored in Amazon DynamoDB.",
            "Patch Amazon EC2 instances.",
            "Encrypt user network traffic.",
            "Create TLS certificates for users' websites."
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (56%)	 	B (41%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: `A. DynamoDB
    All user data stored in Amazon DynamoDB is fully encrypted at rest. DynamoDB encryption at rest provides enhanced security by encrypting all your data at rest using encryption keys stored in AWS Key Management Service (AWS KMS)`
        //upvoted 13 times
    },
    {// Question #143
        number: 143,
        question: "Which AWS service or tool can a company use to visualize, understand, and manage AWS spending and usage over time?",
        options: [
            "AWS Trusted Advisor",
            "Amazon CloudWatch",
            "Cost Explorer",
            "AWS Budgets"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //  1 month, 3 weeks ago
        explanation: "AWS Cost Explorer is the correct answer because it provides a comprehensive set of tools to visualize and analyze costs, usage, and usage trends for different AWS services, and provides cost forecasts to help manage AWS costs over time"
        //upvoted 1 times
    },

    {// Question #144
        number: 144,
        question: `A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources.
    Which AWS service or feature can be used to meet these requirements?`,
        options: [
            "AWS Local Zones",
            "Availability Zones",
            "AWS Outposts",
            "AWS Wavelength Zones"
        ],
        correctAnswers: [0],
        explanation: "Reference: https://d1.awsstatic.com/whitepapers/hybrid-cloud-with-aws.pdf (18)"
        //Community vote distribution
        //C (85%)	A (15%)

        //   Highly Voted  1 year ago
    },
    {// Question #145
        number: 145,
        question: "A company requires an isolated environment within AWS for security purposes. Which action can be taken to accomplish this?",
        options: [
            "Create a separate Availability Zone to host the resources.",
            "Create a separate VPC to host the resources.",
            "Create a placement group to host the resources.",
            "Create an AWS Direct Connect connection between the company and AWS."
        ],
        correctAnswers: [1],
        explanation: "Reference:https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/infrastructure-security.html"

        //Community vote distribution
        //
        //B (90%)	10%
    },

    {// Question #146
        number: 146,
        question: "Which AWS service is a highly available and scalable DNS web service?",
        options: [
            "Amazon VPC",
            "Amazon CloudFront",
            "Amazon Route 53",
            "Amazon Connect"
        ],
        correctAnswers: [2],
        //Reference: https://aws.amazon.com/route53/
        //Community vote distribution
        //C (100%)

        //   Highly Voted  1 year, 7 months ago
        explanation: "C is correct"
        //upvoted 5 times
    },
    {// Question #147
        number: 147,
        question: "Which of the following is an AWS best practice for managing an AWS account root user?",
        options: [
            "Keep the root user password with the security team.",
            "Enable multi-factor authentication (MFA) for the root user.",
            "Create an access key for the root user.",
            "Keep the root user password consistent for compliance purposes."
        ],
        correctAnswers: [1],
        //Reference:https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
        //Community vote distribution
        //B (83%)	C (17%)

        //   Highly Voted  1 year, 8 months ago
        explanation: "b is correct"
    },
    {// Question #148
        number: 148,
        question: `A company wants to improve its security and audit posture by limiting Amazon EC2 inbound access.
    What should the company use to access instances remotely instead of opening inbound SSH ports and managing SSH" keys`,
        options: [
            "EC2 key pairs",
            "AWS Systems Manager Session Manager",
            "AWS Identity and Access Management (IAM)",
            "Network ACLs"
        ],
        correctAnswers: [1],
        explanation: "Reference:https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html"
        //Community vote distribution
        //B (100%)

        //   Highly Voted  1 year, 6 months ago
    },
    {// Question #149
        number: 149,
        question: "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
        options: [
            "No upfront payment",
            "Hourly on-demand payment",
            "Partial upfront payment",
            "All upfront payment"
        ],
        correctAnswers: [2],
        //Reference:https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/
        //Community vote distribution
        //D (100%)

        //   Highly Voted  1 year, 8 months ago
        explanation: "From the link: https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/"
    },

    {// Question #150
        number: 150,
        question: "A company has refined its workload to use specific AWS services to improve efficiency and reduce cost. Which best practice for cost governance does this example show?",
        options: [
            "Resource controls",
            "Cost allocation",
            "Architecture optimization",
            "Tagging enforcement"
        ],
        correctAnswers: [1],
        //Reference:https://d1.awsstatic.com/whitepapers/architecture/AWS-Cost-Optimization-Pillar.pdf
        //Community vote distribution
        //C (79%)	B (21%)

        //   Highly Voted  1 year, 8 months ago
        explanation: "It should be C as per the AWS documentation:"
    },

    {// Question #151
        number: 151,
        question: `A company would like to host its MySQL databases on AWS and maintain full control over the operating system, database installation, and configuration.
    Which AWS service should the company use to host the databases?`,
        options: [
            "Amazon RDS",
            "Amazon EC2",
            "Amazon DynamoDB",
            "Amazon Aurora"
        ],
        correctAnswers: [0],
        explanation: "Reference:https://d1.awsstatic.com/whitepapers/best-practices-for-running-oracle-database-on-aws.pdf?did=wp_card&trk=wp_card 2(6)"
        //Community vote distribution
        //B (95%)	5%

        //   Highly Voted  1 year, 8 months ago
    },
    {// Question #152
        number: 152,
        question: "How does the AWS global infrastructure offer high availability and fault tolerance to its users?",
        options: [
            "The AWS infrastructure is made up of multiple AWS Regions within various Availability Zones located in areas that have low flood risk, and are interconnected with low-latency networks and redundant power supplies.",
            "The AWS infrastructure consists of subnets containing various Availability Zones with multiple data centers located in the same geographic location.",
            "AWS allows users to choose AWS Regions and data centers so that users can select the closest data centers in different Regions.",
            "The AWS infrastructure consists of isolated AWS Regions with independent Availability Zones that are connected with low-latency networking and redundant power supplies."
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  8 months ago
        explanation: `D.- : AWS Regions within various Availability Zones. "within"
    Availability Zones are distinct locations within an AWS Region that are engine},ered to be isolated from failures in other Availability Zones. D: AWS Regions with independent Availability Zones."With"`
    },
    {// Question #153
        number: 153,
        question: "A company is using Amazon EC2 Auto Scaling to scale its Amazon EC2 instances. Which benefit of the AWS Cloud does this example illustrate?",
        options: [
            "High availability",
            "Elasticity",
            "Reliability",
            "Global reach"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //B (77%)	A (19%)	4%

        //   Highly Voted  7 months, 2 weeks ago
        explanation: `B. elasticity
    auto-scaling--> eslaticity`
        //upvoted 18 times
    },
    {// Question #154
        number: 154,
        question: "Which AWS service or feature is used to send both text and email messages from distributed applications?",
        options: [
            "Amazon Simple Notification Service (Amazon SNS)",
            "Amazon Simple Email Service (Amazon SES)",
            "Amazon CloudWatch alerts",
            "Amazon Simple Queue Service (Amazon SQS)"
        ],
        correctAnswers: [2],
        //Reference:https://aws.amazon.com/getting-started/hands-on/send-messages-distributed- applications/#:~:text=Send%20Messages%20Between%20Distributed% 20Applications%20with%20Amazon%20Simple%20Queue%20Service%20(SQS)
        //Community vote distribution
        //A (79%)	D (21%)

        //   Highly Voted  1 year, 8 months ago
        explanation: "I think it's A"
    },
    {// Question #156
        number: 156,
        question: "According to the AWS shared responsibility model, which task is the customer's responsibility?",
        options: [
            "Maintaining the infrastructure needed to run AWS Lambda",
            "Updating the operating system of Amazon DynamoDB instances",
            "Maintaining Amazon S3 infrastructure",
            "Updating the guest operating system on Amazon EC2 instances"
        ],
        correctAnswers: [2],
        //Reference:https://aws.amazon.com/compliance/shared-responsibility- model/#:~:text=Customers%20are%20responsible%20for%20managing,also%20extends% 20to%20IT%20controls
        //Community vote distribution
        //D (100%)

        //  2 months, 1 week ago
        explanation: "D.- "
    },
    {// Question #157"
        number: 157,
        question: `A company wants to migrate a small website and database quickly from on-premises infrastructure to the AWS Cloud. The company has limited operational knowledge to perform the migration.
    Which AWS service supports this use case?`,
        options: [
            "Amazon EC2",
            "Amazon Lightsail",
            "Amazon S3",
            "AWS Lambda"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //B (82%)	C (18%)

        //   Highly Voted  1 year, 8 months ago
        explanation: "I think the answer is B (lightsail is more suitable for little experience)"
        //upvoted 24 times
    },
    {// Question #158
        number: 158,
        question: `A company is moving multiple applications to a single AWS account. The company wants to monitor the AWS Cloud costs incurred by each application.
    What can the company do to meet this requirement?`,
        options: [
            "Set up invoiced billing.",
            "Use AWS Artifact.",
            "Set budgets in Cost Explorer.",
            "Create cost allocation tags."
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (88%)	13%

        //  1 month, 2 weeks ago
        explanation: "D.-  Agreed upvoted 1 times"
        //  2 months, 1 week ago
    },

    {// Question #159
        number: 159,
        question: "Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?",
        options: [
            "Vertical scaling",
            "Manual failure recovery",
            "Testing recovery procedures",
            "Changing infrastructure manually"
        ],
        correctAnswers: [2],
        //Reference:https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/
        //Community vote distribution
        //C (100%)

        //   Highly Voted  1 year, 8 months ago
        explanation: "C. Testing recovery procedures Reliability"
    },

    {// Question #160
        number: 160,
        question: `A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software.
    Which AWS service can be used to accomplish this?`,
        options: [
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Aurora",
            "Amazon Redshift"
        ],
        correctAnswers: [1],
        //Reference: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.html
        //Community vote distribution
        //B (100%)

        //   Highly Voted  1 year, 8 months ago
        explanation: "Yes, it's B - DynamoDB."
    },

    {// Question #161
        number: 161,
        question: "Which task is an AWS responsibility when a workload is running in Amazon RDS?",
        options: [
            "Creating the database table",
            "Updating the database schema",
            "Installing the database engine",
            "Dropping the database records"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //  2 months, 1 week ago
        explanation: "C.- . Installing the database engine is an AWS responsibility when a workload is running in Amazon RDS."
        //upvoted 1 times
    },

    {// Question #163
        number: 163,
        question: `A company has a social media platform in which users upload and share photos with other users. The company wants to identify and remove inappropriate photos. The company has no machine learning (ML) scientists and must build this detection capability with no ML expertise.
    Which AWS service should the company use to build this capability?`,
        options: [
            "Amazon SageMaker",
            "Amazon Textract",
            "Amazon Rekognition",
            "Amazon Comprehend"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: `C. Rekognition Amazon Rekognition
    Automate your image and video analysis with machine learning Amazon Comprehend`
    },
    {// Question #164
        number: 164,
        question: "Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?",
        options: [
            "Database backups",
            "Database software patches",
            "Operating system patches",
            "Operating system installations."
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (86%)	10%

        //   Highly Voted  9 months ago
        explanation: "D.- hen you choose to use EC2 for your database, you first have to provision the EC2 instance, which means you will use an AMI, containing the OS itself which is then installed by AWS to the EC2. All the other tasks are your responsibility."
        //upvoted 14 times
    },

    {// Question #165
        number: 165,
        question: `A company wants to use Amazon S3 to store its legacy data. The data is rarely accessed. However, the data is critical and cannot be recreated. The data needs to be available for retrieval within seconds.
    Which S3 storage class meets these requirements MOST cost-effectively?`,
        options: [
            "S3 Standard",
            "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
            "S3 Standard-Infrequent Access (S3 Standard-IA)",
            "S3 Glacier"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //C (70%)	B (18%)	9%

        //   Highly Voted  6 months ago
        explanation: `Shouldn't it be B: S3 One Zone-IA is for data that is accessed less frequently, but requires rapid access when needed. Unlike other S3 Storage Classes which store data in a minimum of three Availability Zones (AZs), S3 One Zone-IA stores data in a single AZ and costs 20% less than S3 Standard-IA. The 20% less fits the cost effective solution they are looking for.`
        //upvoted 13 times
    },
    {// Question #166
        number: 166,
        question: `An online retail company wants to migrate its on-premises workload to AWS. The company needs to automatically handle a seasonal workload increase in a cost- effective manner.
    Which AWS Cloud features will help the company meet this requirement? (Choose two.)`,
        options: [
            "Cross-Region workload deployment",
            "Pay-as-you-go pricing",
            "Built-in AWS CloudTrail audit capabilities",
            "Auto Scaling policies",
            "Centralized logging"
        ],
        correctAnswers: [1, 3],
        //Community vote distribution
        //BD (100%)

        //   Highly Voted  8 months, 1 week ago
        explanation: "B.- "
    },
    {// Question #167},
        number: 167,
        question: "Which AWS service helps developers use loose coupling and reliable messaging between microservices?",
        options: [
            "Elastic Load Balancing",
            "Amazon Simple Notification Service (Amazon SNS)",
            "Amazon CloudFront",
            "Amazon Simple Queue Service (Amazon SQS)"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  8 months, 1 week ago
        explanation: "D.-  - Amazon SQS is a fully managed message queuing for microservices, distributed systems, and serverless applications. Elastic Load Balancing automatically distributes incoming application traffic; it doesnt help with developer work in this context. Amazon SNS is used for email and notifications to users, not for developers."
        //Amazon CloudFront is a content delivery network (CDN) service built for securely delivering content to customers. It is not used for loose coupling nor microservices.
    },

    {// Question #168
        number: 168,
        question: `A company needs to build an application that uses AWS services. The application will be delivered to residents in European Counties. The company must abide by regional regulatory requirements.
    Which AWS service or program should the company use to determine which AWS services meet the regional requirements?`,
        options: [
            "AWS Audit Manager",
            "AWS Shield",
            "AWS Compliance Program",
            "AWS Artifact"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (82%)	D (18%)

        //   Highly Voted  8 months, 1 week ago
        explanation: "C.- n my opinion it is C  AWS Compliance Program, and let me explain why."
    },
    {// Question #169
        number: 169,
        question: "A company needs to implement identity management for a fleet of mobile apps that are running in the AWS Cloud. Which AWS service will meet this requirement?",
        options: [
            "Amazon Cognito",
            "AWS Security Hub",
            "AWS Shield",
            "AWS WAF"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  8 months, 1 week ago
        explanation: "A.-   Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily."
    },
    {// Question #170
        number: 170,
        question: "A company needs an Amazon EC2 instance for a rightsized database server that must run constantly for 1 year. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
        options: [
            "Standard Reserved Instance",
            "Convertible Reserved Instance",
            "On-Demand Instance",
            "Spot Instance"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (79%)	B (21%)

        //  3 months, 2 weeks ago
        explanation: "B.- onvertible Reserved Instance"
    },
    {// Question #171
        number: 171,
        question: "A company has multiple applications and is now building a new multi-tier application. The company will host the new application on Amazon EC2 instances. The company wants the network routing and traffic between the various applications to follow the security principle of least privilege. Which AWS service or feature should the company use to enforce this principle?",
        options: [
            "Security groups",
            "AWS Shield",
            "AWS Global Accelerator",
            "AWS Direct Connect gateway"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  8 months, 1 week ago
        explanation: "A.-   Security groups control the traffic that is allowed to reach and leave the resources that it is associated with. AWS Shield is for DDoS protection."
        //AWS Global Accelerator is for global reach.
    },
    {// Question #172
        number: 172,
        question: "A company's web application requires AWS credentials and authorizations to use an AWS service. Which IAM entity should the company use as best practice?",
        options: [
            "IAM role",
            "IAM user",
            "IAM group",
            "IAM multi-factor authentication (MFA)"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (93%)	7%

        //   Highly Voted  6 months, 1 week ago
        //explanation: "A.- ttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html upvoted 5 times"
        //   Highly Voted  9 months, 2 weeks ago},
        //explanation: "A.- ttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html upvoted 5 times"
    },
    {// Question #173
        number: 173,
        question: "A company is creating a document that defines the operating system patch routine for all the company's systems. Which AWS resources should the company include in this document? (Choose two.)",
        options: [
            "Amazon EC2 instances",
            "AWS Lambda functions",
            "AWS Fargate tasks",
            "Amazon RDS instances",
            "Amazon Elastic Container Service (Amazon ECS) instances"
        ],
        correctAnswers: [0, 3],
        //Community vote distribution
        //AE (47%)	AD (42%)	8%

        //   Highly Voted  5 months, 2 weeks ago
        explanation: "Who writes these questions lol. There's unnecessary levels of imprecision and ambiguity."
        //upvoted 26 times
    },
    {// Question #174
        number: 174,
        question: "Which AWS service or feature gives a company the ability to control incoming traffic and outgoing traffic for Amazon EC2 instances?",
        options: [
            "Security groups",
            "Amazon Route 53",
            "AWS Direct Connect",
            "Amazon VPC"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "A.-  security group acts as a virtual firewall for your EC2 instances to control incoming and outgoing traffic. Inbound rules control the incoming traffic to your instance, and outbound rules control the outgoing traffic from your instance. When you launch an instance, you can specify one or more security groups."
        //upvoted 18 times
    },
    {// Question #175
        number: 175,
        question: `A company is starting to build its infrastructure in the AWS Cloud. The company wants access to technical support during business hours. The company also wants general architectural guidance as teams build and test new applications.
    Which AWS Support plan will meet these requirements at the LOWEST cost?`,
        options: [
            "AWS Basic Support",
            "AWS Developer Support",
            "AWS Business Support",
            "AWS Enterprise Support"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (94%)	6%

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "B.- e recommend AWS Developer Support if you are testing or doing early development on AWS and want the ability to get technical support during business hours as well as general architectural guidance as you build and test."
    },
    {// Question #177
        number: 177,
        question: `A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance, and security.
    Which AWS service can the company use to meet these requirements?`,
        options: [
            "AWS Shield",
            "AWS WAF",
            "AWS Trusted Advisor",
            "AWS Service Catalog"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  8 months, 1 week ago
        explanation: "C  AWS Trusted Advisor is used to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance, and security."
    },
    {// Question #178
        number: 178,
        question: "Which AWS service provides the capability to view end-to-end performance metrics and troubleshoot distributed applications?",
        options: [
            "AWS Cloud9",
            "AWS CodeStar",
            "AWS Cloud Map",
            "AWS X-Ray"
        ],
        correctAnswers: [3],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  1 year, 5 months ago
        explanation: "D: https://aws.amazon.com/xray/?nc2=type_a"
        //upvoted 6 times
    },
    {// Question #179
        number: 179,
        question: "Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?",
        options: [
            "Pay-as-you-go pricing",
            "High availability",
            "Global reach",
            "Economies of scale"
        ],
        correctAnswers: [3],
        //Community vote distribution
        //D (96%)	4%

        //   Highly Voted  1 year, 7 months ago
        explanation: "D. Economies of scale"
        //upvoted 15 times
    },
    {// Question #180
        number: 180,
        question: "Which AWS service provides threat detection by monitoring for malicious activities and unauthorized actions to protect AWS accounts, workloads, and data that is stored in Amazon S3?",
        options: [
            "AWS Shield",
            "AWS Firewall Manager",
            "Amazon GuardDuty",
            "Amazon Inspector"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //  2 months, 4 weeks ago
        explanation: `A - no. DDoS detection
    B - no. centralized security management to create and manage WAF rules. 
    C - yes. threat detection by monitoring for malicious activities`
    },
    {// Question #181
        number: 181,
        question: "Which AWS service can a company use to store and manage Docker images?",
        options: [
            "Amazon DynamoDB",
            "Amazon Kinesis Data Streams",
            "Amazon Elastic Container Registry (Amazon ECR)",
            "Amazon Elastic File System (Amazon EFS)"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //  4 months, 4 weeks ago
        explanation: "C.-  is the answer. upvoted 1 times"
        //  //6 months, 1 week ago biryaniboy says is D please h},elp him ashif upvoted 1 times
        //  6 months, 2 weeks ago
    },
    {// Question #182
        number: 182,
        question: `A company needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances. The report also must identify operating system vulnerabilities on those instances.
    Which AWS service or feature should the company use to meet this requirement?`,
        options: [
            "AWS Trusted Advisor",
            "Security groups",
            "Amazon Macie",
            "Amazon Inspector"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //  4 months ago
        explanation: "D.- keyword: Vulnerability which is Inspector."
    },
    {// Question #183
        number: 183,
        question: `A global company is building a simple time-tracking mobile app. The app needs to operate globally and must store collected data in a database. Data must be accessible from the AWS Region that is closest to the user.
    What should the company do to meet these data storage requirements with the LEAST amount of operational overhead?`,
        options: [
            "Use Amazon EC2 in multiple Regions to host separate databases",
            "Use Amazon RDS cross-Region replication",
            "Use Amazon DynamoDB global tables",
            "Use AWS Database Migration Service (AWS DMS)"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  7 months, 3 weeks ago
        explanation: "C.- rom: https://aws.amazon.com/dynamodb/global-tables/"
    },
    {// Question #184
        number: 184,
        question: "Which of the following are economic advantages of the AWS Cloud? (Choose two.)",
        options: [
            "Increased workforce productivity",
            "Decreased need to encrypt user data",
            "Manual compliance audits",
            "Simplified total cost of ownership (TCO) accounting",
            "Faster product launches"
        ],
        correctAnswers: [2, 4],
        //Community vote distribution
        //AE (43%)	 	DE (37%)		AD (20%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: "A.- A and E"
    },
    {// Question #185
        number: 185,
        question: "Which controls does the customer fully inherit from AWS in the AWS shared responsibility model?",
        options: [
            "Patch management controls",
            "Awareness and training controls",
            "Physical and environmental controls",
            "Configuration management controls"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //C (85%)	D (15%)

        //   Highly Voted  11 months, 3 weeks ago
        explanation: "This is testing your English reading"
        //upvoted 81 times
    },
    {// Question #186
        number: 186,
        question: "Which task is a customer's responsibility, according to the AWS shared responsibility model?",
        options: [
            "Management of the guest operating systems",
            "Maintenance of the configuration of infrastructure devices",
            "Management of the host operating systems and virtualization",
            "Maintenance of the software that powers Availability Zones"
        ],
        correctAnswers: [0],
        //Community vote distribution
        //A (100%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: "A.keyword guest"
        //upvoted 5 times
    },

    {// Question #188
        number: 188,
        question: "A company wants to increase its ability to recover its infrastructure in the case of a natural disaster. Which pillar of the AWS Well-Architected Framework does this ability represent?",
        options: [
            "Cost optimization",
            "Performance efficiency",
            "Reliability",
            "Security"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (100%)

        //   Highly Voted  1 year, 5 months ago
        explanation: "C : The ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues."
        //upvoted 6 times
    },
    {// Question #189
        number: 189,
        question: "Which AWS service tracks API calls and user activity?",
        options: [
            "AWS Organizations",
            "AWS Config",
            "Amazon CloudWatch",
            "AWS CloudTrail"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //  4 months, 4 weeks ago
        //explanation: "D.-  is the answer. upvoted 1 times"
        //  6 months, 2 weeks ago},
        //explanation: "D.- ttps://aws.amazon.com/cloudtrail/faqs/ upvoted 2 times"
    },
    {// Question #190
        number: 190,
        question: "Which AWS service, feature, or tool uses machine learning to continuously monitor cost and usage for unusual cloud spending?",
        options: [
            "Amazon Lookout for Metrics",
            "AWS Budgets",
            "Amazon CloudWatch",
            "AWS Cost Anomaly Detection"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //D (100%)

        //   Highly Voted  6 months, 2 weeks ago
        explanation: "D.- AWS Cost Anomaly Detection is an AWS cost management feature that uses machine learning to continually monitor your cost and usage to detect unusual spends."
    },
    {// Question #191
        number: 191,
        question: `A company deployed an application on an Amazon EC2 instance. The application ran as expected for 6 months in the past week, users have reported latency issues. A system administrator found that the CPU utilization was at 100% during business hours. The company wants a scalable solution to meet demand.
    Which AWS service or feature should the company use to handle the load for its application during periods of high demand?`,
        options: [
            "Auto Scaling groups",
            "AWS Global Accelerator",
            "Amazon Route 53",
            "An Elastic IP address"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //A (97%)

        //   Highly Voted  9 months, 2 weeks ago
        explanation: "A.- WS Auto Scaling monitors your application and automatically adds or removes capacity from your resource groups in real-time as demands change."
    },
    {// Question #193
        number: 193,
        question: `A company is generating large sets of critical data in its on-premises data center. The company needs to securely transfer the data to AWS for processing. These transfers must occur daily over a dedicated connection.
    Which AWS service should the company use to meet these requirements?`,
        options: [
            "AWS Backup",
            "AWS DataSync",
            "AWS Direct Connect",
            "AWS Snowball"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //C (75%)	B (23%)

        //   Highly Voted  7 months, 3 weeks ago
        explanation: "C.- he answer is C because Data sync is a secure, online service that automates and accelerates moving data between on premises and AWS Storage services. whereas Direct connect is a network service that provides an alternative to using the Internet to utilize AWS cloud services. In this scenario the company wants to transfer the file for processing not storing C is the correct answer."
    },
    {// Question #194
        number: 194,
        question: `A company wants to run production workloads on AWS. The company wants access to technical support from engineers 24 hours a day, 7 days a week. The company also wants access to the AWS Health API and contextual architectural guidance for business use cases. The company has a strong IT support team and does not need concierge support.
    Which AWS Support plan will meet these requirements at the LOWEST cost?`,
        options: [
            "AWS Basic Support",
            "AWS Developer Support",
            "AWS Business Support",
            "AWS Enterprise Support"
        ],
        correctAnswers: [2],
        //Community vote distribution
        //C (97%)

        //   Highly Voted  9 months, 1 week ago
        explanation: "C.- he answer should be C . 2 reasons"
    },
    {// Question #195
        number: 195,
        question: "Which of the following is a managed AWS service that is used specifically for extract, transform, and load (ETL) data?",
        options: [
            "Amazon Athena",
            "AWS Glue",
            "Amazon S3",
            "AWS Snowball Edge"
        ],
        correctAnswers: [1],
        //Community vote distribution
        //B (100%)

        //   Highly Voted  7 months, 2 weeks ago
        explanation: "B. Glue == stick 3 things together: Extract, transform, load (ETL)"
        //upvoted 11 times
    },

    {// Question #196
        number: 196,
        question: "Which of the following actions are controlled with AWS Identity and Access Management (IAM)? (Choose two.)",
        options: [
            "Control access to AWS service APIs and to other specific resources.",
            "Provide intelligent threat detection and continuous monitoring.",
            "Protect the AWS environment using multi-factor authentication (MFA).",
            "Grant users access to AWS data centers.",
            "Provide firewall protection for applications from common web attacks."
        ],
        correctAnswers: [0, 2],
        //Community vote distribution
        //AC (69%)	AD (19%)	13%

        //  4 months, 3 weeks ago
        explanation: "A.- AWS multi-factor authentication (MFA) is an AWS Identity and Access Management (IAM) best practice that requires a second authentication factor in addition to user name and password sign-in credentials. You can enable MFA at the AWS account level and for root and IAM users you have created in your account."
    },
    {// Question #197
        number: 197,
        question: "Which of the following are shared controls that apply to both AWS and the customer, according to the AWS shared responsibility model? (Choose two.)",
        options: [
            "Resource configuration management",
            "Network data integrity",
            "Employee awareness and training",
            "Physical and environmental security",
            "Replacement and disposal of disk drives"
        ],
        correctAnswers: [0, 2],
        //Community vote distribution
        //AC (100%)

        //   Highly Voted  7 months, 3 weeks ago
        explanation: "A.- Refer to: https://aws.amazon.com/compliance/shared-responsibility-model/"
    },
    {// Question #198
        number: 198,
        question: "What information is found on an AWS Identity and Access Management (IAM) credential report? (Choose two.)",
        options: [
            "The date and time when an IAM user's password was last used to sign in to the AWS Management Console.",
            "The type of multi-factor authentication (MFA) device assigned to an IAM user.",
            "The User-Agent browser identifier for each IAM user currently logged in.",
            "Whether multi-factor authentication (MFA) has been enabled for an IAM user.",
            "The number of incorrect login attempts by each IAM user in the previous 30 days."
        ],
        correctAnswers: [0, 2],
        //Community vote distribution
        //AD (96%)	4%

        //   Highly Voted  2 months, 1 week ago
        explanation: `I just donwloaded the report:
    user arn user_creation_time password_enabled password_last_used password_last_changed password_next_rotation mfa_active access_key_1_active access_key_1_last_rotated access_key_1_last_used_date access_key_1_last_used_region access_key_1_last_used_service access_key_2_active access_key_2_last_rotated access_key_2_last_used_date access_key_2_last_used_region access_key_2_last_used_service cert_1_active cert_1_last_rotated cert_2_active cert_2_last_rotated`
    },

    {// Question #199
        number: 199,
        question: "What is the LEAST expensive AWS Support plan that contains a full set of AWS Trusted Advisor best practice checks?",
        options: [
            "AWS Enterprise Support",
            "AWS Business Support",
            "AWS Developer Support",
            "AWS Basic Support"
        ],
        correctAnswers: [1]
        //Community vote distribution
        //B (100%)

        //  1 week, 6 days ago
        //A
        //upvoted 1 times
    }
]

var currentQuestionIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var currentExplanation = "";

// Mostrar la pregunta actual
function showQuestion() {
  var questionContainer = document.getElementById("question");
  var optionsContainer = document.getElementById(options);
  var checkBtn = document.getElementById("checkBtn");
  var explanationBtn = document.getElementById("explanationBtn");
  var nextBtn = document.getElementById("nextBtn");
  var counterContainer = document.getElementById("counter");


  counterContainer.innerHTML = "Preguntas: [" + (currentQuestionIndex+1) + " de " + TOTAL_NUMBERS_QUESTIONS + "]";

  var randomIndex = randomNumbersQuestion[currentQuestionIndex];
  var currentQuestion = questions[randomIndex];

  questionContainer.innerHTML = "<div class='question'>" + currentQuestion.question + "</div>";
  currentExplanation = currentQuestion.explanation;
  
  // Determinar si la pregunta es de una sola respuesta o múltiples respuestas
  var isSingleAnswerQuestion = questions[currentQuestionIndex].correctAnswers.length === 1;

  var letter = "A".charCodeAt(0);
  optionsContainer.innerHTML = "";
  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = currentQuestion.options[i];
    var answerInput = document.createElement("input");
    answerInput.setAttribute("type", isSingleAnswerQuestion ? "radio" : "checkbox");
    answerInput.setAttribute("name", "answer");
    answerInput.setAttribute("value", i);
    optionsContainer.appendChild(answerInput);

    var label = document.createElement("label");
    label.innerHTML = String.fromCharCode(letter) + ") " + option;
    letter += 1;
    optionsContainer.appendChild(label);

    optionsContainer.appendChild(document.createElement("br"));
    optionsContainer.classList.remove("correct", "incorrect");
  }

  checkBtn.style.display = "block";
  explanationBtn.style.display = "none";
  nextBtn.style.display = "none";
}

// Comprobar la respuesta seleccionada
function checkAnswer() {
  var selectedAnswers = document.querySelectorAll('input[name="answer"]:checked');
  if (selectedAnswers.length === 0) {
    return; // No se seleccionó ninguna respuesta
  }

  var selectedAnswerIndices = Array.from(selectedAnswers).map(function (answer) {
    return parseInt(answer.value);
  });

  var currentQuestion = questions[currentQuestionIndex];

  // Verificar si las respuestas seleccionadas son todas las correctas
  var isCorrect = selectedAnswerIndices.length === currentQuestion.correctAnswers.length &&
    currentQuestion.correctAnswers.every(function (correctAnswer) {
      return selectedAnswerIndices.includes(correctAnswer);
    });

  if (isCorrect) {
    selectedAnswers.forEach(function (answer) {
      answer.nextSibling.classList.add("correct");
    });
    correctAnswers++;
  } else {
    selectedAnswers.forEach(function (answer) {
      answer.nextSibling.classList.add("incorrect");
    });
    incorrectAnswers++;
  }

  var checkBtn = document.getElementById("checkBtn");
  var explanationBtn = document.getElementById("explanationBtn");
  var nextBtn = document.getElementById("nextBtn");

  checkBtn.style.display = "none";
  explanationBtn.style.display = "block";
  nextBtn.style.display = "block";
}

// Mostrar la explicación de la respuesta
function showExplanation() {
  var explanation = document.getElementById(explanation);
  explanation.innerHTML = currentExplanation.replaceAll("\n", "<br>");
  explanation.style.display = "block";
}

// Deshabilitar las opciones después de seleccionar una respuesta
function disableOptions() {
  var options = document.querySelectorAll('input[name="answer"]');
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = true;
  }
}

// Pasar a la siguiente pregunta
function nextQuestion() {
  var nextBtn = document.getElementById("nextBtn");
  var explanationBtn = document.getElementById("explanationBtn");
  var questionContainer = document.getElementById("question");
  var optionsContainer = document.getElementById(options);
  var explanation = document.getElementById(explanation);
  explanation.style.display = "none";

  nextBtn.style.display = "none";
  explanationBtn.style.display = "none";

  if (currentQuestionIndex === TOTAL_NUMBERS_QUESTIONS - 1) {
    showSummary();
  } else {
    currentQuestionIndex++;
    questionContainer.innerHTML = "";
    optionsContainer.innerHTML = "";
    showQuestion();
  }
}

// Mostrar el resumen de preguntas acertadas y equivocadas
function showSummary() {
  var summaryContainer = document.getElementById("summary");
  summaryContainer.innerHTML = "<h2>Resumen</h2>" +
    "<p>Preguntas correctas: " + correctAnswers + "</p>" +
    "<p>Preguntas incorrectas: " + incorrectAnswers + "</p>" +
    "<button onclick='repeatIncorrectQuestions()'>Repetir preguntas incorrectas</button>";
  summaryContainer.style.display = "block";
}

// Repetir las preguntas incorrectas
function repeatIncorrectQuestions() {
  questions = questions.filter(function (question, index) {
    return index < currentQuestionIndex || !question.correctAnswers.every(function (correctAnswer) {
      return selectedAnswerIndices.includes(correctAnswer);
    });
  });

  currentQuestionIndex = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  document.getElementById("summary").style.display = "none";
  showQuestion();
}

function generateRandomNumbers(count, max) {
  var randomNumbers = new Set();

  while (randomNumbers.size < count) {
    var randomNumber = Math.floor(Math.random() * max) + 1;
    randomNumbers.add(randomNumber);
  }

  return Array.from(randomNumbers);
}

var TOTAL_NUMBERS_QUESTIONS = 7;
var totalQuestions = questions.length;
var randomNumbersQuestion = generateRandomNumbers(TOTAL_NUMBERS_QUESTIONS, totalQuestions);

function startCountdown(minutes) {
  var seconds = minutes * 60;

  var countdownInterval = setInterval(function() {
    var minutesText = Math.floor(seconds / 60).toString().padStart(2, '0');
    var secondsText = (seconds % 60).toString().padStart(2, '0');
    var clockText = minutesText + ':' + secondsText;

    document.getElementById("clock").innerText = clockText;

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("clock").innerText = "Countdown finished!";
    } else {
      seconds--;
    }
  }, 1000);
}

var initialMinutes = TOTAL_NUMBERS_QUESTIONS * 2;
startCountdown(initialMinutes);

showQuestion();
