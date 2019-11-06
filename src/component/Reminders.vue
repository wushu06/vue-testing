<template>
    <div>
        <input type="text" class="new-reminder" v-model="newReminder">
        <button @click="add">add</button>

        <ul v-if="reminders">
            <li v-for="reminder in reminders">
                {{reminder}}
                <button class="delete" @click="remove(reminder)">delete</button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                newReminder: '',
                reminders: []
            }
        },
        methods: {
            add(){
                this.reminders.push(this.newReminder)
                this.newReminder = ''
            },
            remove(reminder){
                this.reminders.splice(reminder, 1)

            }
        }
    }
</script>