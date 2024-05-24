// Initialize Supabase
const supabaseUrl = 'https://xcfzdzyfgwisunfnoewh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjZnpkenlmZ3dpc3VuZm5vZXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1MDY4NjEsImV4cCI6MjAzMjA4Mjg2MX0.BUwJBUHSIU6lzS1WZSq-RQuAzC_4V5yAYEpvKal3M9s';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('attendance-button').addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    if (name) {
        const { data, error } = await supabase
            .from('attendance')
            .insert([{ name, timestamp: new Date() }]);
        if (error) {
            document.getElementById('status').innerText = 'Error logging attendance.';
            console.error(error);
        } else {
            document.getElementById('status').innerText = 'Thank you for marking your attendance!';
            setTimeout(() => {
                window.close();
            }, 2000);
        }
    } else {
        document.getElementById('status').innerText = 'Please enter your name.';
    }
});

function validateInput(event) {
    const input = event.target;
    input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
}
