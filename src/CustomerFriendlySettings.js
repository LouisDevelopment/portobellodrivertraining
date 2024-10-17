/*  If you add a new offering (maybe lessons with a learner instructor are discounted), you will have to contact louis@teamvertex.co.uk
    to have that reflected on the website, otherwise just edit numbers below */
const PriceSettings = {
    //Learner Lesson price in £
    learnerPrice: 65,
    //Learner Lesson length in minutes
    learnerLength: 90,

    //Refresher Course price in £
    refresherPrice: 65,
    //Refresher Course length in minutes
    refresherLength: 90,

    //Medical Driving Assessment price in £
    medicalPrice: 70,
    //Medical Driving Assessment length in minutes
    medicalLength: 90,

    //Test Day Lesson price in £
    testDayPrice: 85,
    //Test Day Lesson length in minutes
    testDayLength: 120,


};

//In code, any text intended to be shown on the website should be surrounded with quotation marks: " " as seen below. These are known as strings. (like stringing words together)
//If for any reason you want to include quotation marks (") in the text, this can be done by putting a backwards slash (\) before the quotation mark (") like so: \"

/*  If you wish to add a new entry to the TermsAndConditionHighlights, Follow the structure below and put your new section at the end of the existing sections
    with a comma (,) separating it from the previous section
    *NOTE* you do not need to include an icon, bold and description. If for example, you dont want any bold text, or dont want an icon, just dont add those lines
 */
const TermsAndConditionsHighlights = [
    {
        icon: "🤝",
        bold: "Gordon Kemp has a cancellation policy of 48 hours.",
        description: "If you cannot make a lesson, please let them know via text/WhatsApp/phone 48 hours before your lesson. If there is an emergency, within 48 hours - call Gordon directly."
    },
    {
        icon: "🚗",
        bold: "Your driving test requires at least a 2 hour lesson booking.",
        description: "When you book your practical driving test, Gordon will book out 2 hours of their time for you to sit the test. This will be paid in full either before the day of your driving or on the day of your driving test."
    },
    {
        icon: "⏰",
        bold: "If you're going to be late, let Gordon Kemp know.",
        description: "If you suspect you will be delayed starting your driving lesson, let Gordon know ahead of time."
    },
]


//For readability, and to keep things formatted the way you want it, some of the text below has been separated onto new lines.
//This is signified by: <br>
//Where there are new line markings, the string ends, and a new string begins. These are connected with a +. This just tells the computer to combine the strings into one.
const TermsAndConditionsIntroduction = "The following terms and conditions represent the basis upon which The Driving Instructor and The Driving School (Gordon Kemp's and their driving school) offer driving lessons and courses to you (the student). <br>" +
    "Please note, The Driving School is independently owned and operated thus the contract for service is between you and The Driving Instructor. <br>" +
    "GoRoadie is a separate entity which has been authorised to act as a booking agent and technology partner for Approved Driving Instructors in the UK. "

//For adding a new Term/Condition, just follow the structure below, similar to the TermsAndConditionsHighlights section
const TermsAndConditions = [
    {
        termTitle: "General conduct",
        termDescription: "The Driving Instructor will be courteous, polite, tidy and punctual. The Driving Instructor will behave in a professional and ethical manner at all times. The Driving Instructor training car will be well maintained, clean and tidy (weather permitting). The Driving Instructor car is fitted with dual-controls and is fully insured for driving tuition purposes. The Driving Instructor will not smoke in the training car at anytime, nor will The Driving Instructor use your lesson time for any other form of business, personal or otherwise without your expressed permission."
    },
    {
        termTitle: "Qualifications",
        termDescription: "The Driving Instructor is legally authorised to give driving tuition in the UK by the Driver and Vehicle Standards Agency (DVSA)."
    },
    {
        termTitle: "Driving Licence and eyesight",
        termDescription: "You must hold a current, valid driving licence (provisional or full), which must be produced on or in advance of our first driving lesson. You must prove your entitlement to drive and provide me with a licence check code prior to our first driving lesson. The Driving Instructor can provide the instructions on how to do this. You must also check that you can read a number plate at a distance of 20.5 metres (i.e. 67 feet - about 5 car lengths) with prescribed visual aids (i.e. contact lenses or glasses) if normally worn. Please note if you need contact lenses or glasses to achieve this you must make sure you wear them on each and every driving lesson."
    },
    {
        termTitle: "Safety, comfort and well being",
        termDescription: "Safety is a shared responsibility as identified below: <br>" +
            "In the interests of comfort and safety you are advised to wear suitable footwear and clothing which does not restrict movement or which is inappropriate, distracting or could lead to embarrassing situations. <br>" +
            "It is important you act responsibly at all times and give your undivided attention to the driving task at hand. Should anything be distracting you during your lesson it is important that you make me aware of this fact even if it is something The Driving Instructor is doing. Similarly if you are feeling uncomfortable or uneasy about any driving task please let The Driving Instructor know. The Driving Instructor will be grateful for your feedback and The Driving Instructor will think no less of you for doing this. <br>" +
            "In an emergency situation it is important you follow The Driving Instructors instructions and allow The Driving Instructor to take control of the steering wheel if necessary to avoid an incident. The Driving Instructor may also need to make use of the dual controls (i.e. brake and or clutch pedals) and thus override your use of them. As soon as it is safe to do so The Driving Instructor will advise you of why The Driving Instructor's actions were necessary and help you to calm down if required. Any subsequent discussion will focus on what can be learnt rather than who was to blame. <br>" +
            "The Driving Instructor will do their best to deliver any instructions or take any actions (even in an emergency) in a calm and measured manner so as not to alarm you or make you feel uncomfortable or disheartened in any way. The Driving Instructor will definitely not shout at you or make any sarcastic or derogatory remarks. <br>" +
            "You can be assured The Driving Instructor will not use improper language or suggestive behaviour and/or physical contact. <br>" +
            "You must take note of any medication you are taking which may affect your ability to drive safely and advise me accordingly before taking any lesson booked. Similarly, you should inform me of anything you feel might impact on your ability to undertake the proposed lesson safely. <br>" +
            "In the event it becomes apparent you are unable to concentrate due to illness, tiredness, or your emotional state of mind The Driving Instructor reserve the right to terminate the lesson early or require your agreement to choose an alternative learning activity which can still be undertaken safely."
    },
    {
        termTitle: "Driving under the influence",
        termDescription: "To ensure the safety of you and other road users The Driving Instructor reserve the right to cancel any lesson if you are or if The Driving Instructor suspect you are under the influence of drugs, legal highs and/or alcohol (prescribed or otherwise). If this occurs the full training fee for the period in question will be lost or charged."
    },
    {
        termTitle: "Lesson postponement",
        termDescription: "You may lose, or be required to pay for, any lessons booked in The Driving Instructor's diary which are postponed or cancelled by you, especially if The Driving Instructor am unable to obtain new replacement work for those appointment time(s). However, The Driving Instructor reserves the right to postpone lessons if The Driving Instructor considers the weather or road conditions to be unsuitable or dangerous. Unfortunately, The Driving Instructor cannot be held responsible for any costs incurred as a result of me having to postpone any lessons, for whatever reason. You will not incur a charge if you cancel out with The Driving Instructor's cancellation period of 48 hours before the lesson."
    },
    {
        termTitle: "Punctuality",
        termDescription: "In your own interests you are advised to be punctual for your lesson appointments. All such appointments should be recorded (and checked where possible with The Driving Instructor) in your GoRoadie App to ensure mistakes are avoided. <br>" +
            "The Driving Instructor would normally wait for you for a maximum of 15 minutes before the lesson would be abandoned and the lesson fee forfeited or become due for payment. A reciprocal waiting time may become necessary if The Driving Instructor am delayed due to unforeseen circumstances. The Driving Instructor will make up any lesson time lost as a result of this at the end of the normal lesson time or as soon as possible. Any such shortfall should be recorded in your GoRoadie App and initialled by The Driving Instructor."
    },
    {
        termTitle: "Payments",
        termDescription: "You must pay The Driving Instructor's fees for all lessons, and The Driving Instructor will charge for lessons on an 90 minute basis. You can obtain information on current lesson fees from The Driving Instructor directly or on Their website or Social Media channels. <br>" +
            "The Driving Instructor may change fees without prior notice but if The Driving Instructor increase or reduce the fees between the time You book a lesson and the date of the lesson [and You pay for it in advance of the lesson], the price increase or reduction will not apply to that lesson but where there is a decrease The Driving Instructor may in their discretion decide to refund You the amount of the decrease; <br>" +
            "You shall make payment to The Driving Instructor in advance by cash, direct debit, credit card, bank transfer, GoRoadie Payment. The Driving Instructor shall give You a receipt for all sums that The Driving Instructor receive from You. <br>" +
            "Payment that goes through GoRoadie is and is cancelled before the cancellation policy will be transferred back to you. You may need to provide proof that you cancelled a head of time or use the GoRoadie App when this feature is released. "
    },
    {
        termTitle: "GoRoadie Payments",
        termDescription: "When you pay money to The Driving Instructor via GoRoadie or GoRoadie Pay, that money will be held securely in our Stripe account until the lesson is about to take place. The money is held on your behalf as well as The Driving Instructor's behalf."
    },
    {
        termTitle: "The Driving Test",
        termDescription: "Bookings <br>" +
            "Driving tests can be booked by you, or The Driving Instructor on your behalf. Driving test bookings always take priority over other lessons. Therefore, your lesson may be postponed to allow for someone else's driving test and vice-versa. Changes to lesson bookings as a result of this will be notified immediately. Test appointments must be notified to me as soon as they are known to you, otherwise The Driving Instructor cannot guarantee to provide a vehicle for the test or any lessons just prior to it. <br>" +
            "You will pay a 2 hour rate on the day of your driving test, to cover the usage of the car and potentially a driving lesson before the test. <br> <br>" +
            "Use of the vehicle <br>" +
            "In the interests of customer and public safety The Driving Instructor reserves the right to withhold the use of the training car for the test if, in The Driving Instructor's opinion, your driving is actually or potentially dangerous - behaviour which if repeated on the test would result in a test failure. <br> <br>" +
            "Test cancellation <br>" +
            "Three clear working days (Sundays and public holidays don't count as working days) notice of test cancellation or postponement is required by the DVSA. Therefore to cancel a test booked for a Friday you need to do this online no later than the preceding Monday thus giving three clear working days (i.e. Tuesday, Wednesday and Thursday). Failure to provide the required notice will result in the loss of your test fee. The Driving Instructor cannot be held responsible for any postponement or cancellation of tests by you or the DVSA. However, The Driving Instructor will do all that is possible to arrange another test as quickly as possible and to help you to reclaim expenses from the DVSA if appropriate. "
    },
    {
        termTitle: "Complaints",
        termDescription: "In the event of a complaint The Driving Instructor would be extremely grateful if you would give them the opportunity to resolve the matter in the first instance. However, please do not let a problem linger. <br>" +
            "If there are serious issues, you can contact the DVSA directly or the GoRoadie team will be happy to assist."
    },
    {
        termTitle: "Your statutory rights",
        termDescription: "Nothing in these terms and conditions will reduce your statutory rights relating to faulty goods or services provided. The Driving Instructor has a statutory obligation to provide you with goods and services fit for the purpose for which they were bought and as described. If you have any doubts about your statutory rights please contact your local Trading Standards Department or Citizen's Advice Bureau."
    },

]

//Ignore this, it just sends the information above to the rest of the program
export default PriceSettings;
export {
    TermsAndConditions,
    TermsAndConditionsHighlights,
    TermsAndConditionsIntroduction
}